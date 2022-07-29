import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HttpError extends Error {
  code: number;
  url: string;

  constructor(code: number, url: string, message?: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = HttpError.name;
    this.url = url;
    this.code = code;
  }
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  setup: any;
  baseUrl!: string;
  resetUrl!: string;
  endpoints: any;
  dnsendpoints: any;
  errorMessage: any;
  constructor(
    private http: HttpClient
  ) {

  }

  async download(url: string, options = {}) {
    const response = await fetch(url, options);
    const json = await response.json();

    if (response.status !== 200) {
      if (json && json.status) {
        throw new HttpError(json.status, url, JSON.stringify(json));
      } else {
        throw new HttpError(response.status, url, response.statusText);
      }
    }

    return json;
  }

  async downloadRelative(path: string, options = {}) {
    return this.download(this.baseUrl + path, options);
  }

  async request(url: RequestInfo | URL, options = {}) {
    const response = await fetch(url, options);
    return response;
  }

  async requestRelative(path: string, options = {}) {
    const response = await fetch(this.baseUrl + path, options);
    return response;
  }

  async loadSetup(chain: string) {

    let setup = null;


    setup = await this.download('https://chains.blockcore.net/chains/' + chain.toUpperCase() + '.json');


    this.baseUrl = setup.Explorer.Indexer.ApiUrl;

    // Remove the trailing / as we expect all URLs we build up expect it.
    if (this.baseUrl.endsWith('/')) {
      this.baseUrl = this.baseUrl.substring(0, this.baseUrl.length - 1);
    }

    this.resetUrl = this.baseUrl;

    const storageUrl = localStorage.getItem(chain + '-url');

    if (storageUrl != null) {
      this.baseUrl = storageUrl;
      console.log('storage baseUrl', this.baseUrl);
      return setup;
    }
    return setup;
  }

  async getBaseUrl() {
    return this.baseUrl;
  }

  async setBaseUrl(chain: string, url: string) {
    this.baseUrl = url;
    localStorage.setItem(chain + '-url', url);
  }

  async resetBaseUrl(chain: string) {
    localStorage.removeItem(chain + '-url');
    this.baseUrl = this.resetUrl;
  }
  async loadGithub() {
    return this.download(`https://status.seniorblockchain.io/github.json`);
  }
  async loadChains(chain: string) {
    return this.download(`https://chains.blockcore.net/CHAINS-${chain}.json`);
  }

  async loadIndexers() {

    if (this.dnsendpoints == null) {
      this.dnsendpoints = await this.download('https://chains.blockcore.net/services/DNS.json');
    }

    this.endpoints = [];


    for (let index = 0; index < this.dnsendpoints.length; index++) {
      const element = this.dnsendpoints[index];

      try {
        const res = await this.download(element['url'] + '/api/dns/services/service/Indexer');

        res.url = element['url'];
        this.endpoints.push(res);

      } catch (err: any) {
        if (err.message[0] === '{') {
          this.errorMessage = JSON.parse(err.message);
        } else {
          this.errorMessage = err;
        }
        console.log(err);
      }

    }
    return this.endpoints;
  }
  async getInfo() {
    return this.downloadRelative('/stats/info');
  }

  async getLastBlock(transactions: boolean = true) {
    return this.downloadRelative('/query/block/latest');
  }

  async getBlocks(offset: number | string, limit: number) {
    return this.downloadRelative('/query/block?offset=' + offset + '&limit=' + limit);
  }

  async getBlocksRequest(offset: number, limit: number) {
    return this.downloadRelative('/query/block?offset=' + offset + '&limit=' + limit);
  }

  async getBlockByHeight(index: number) {
    return this.downloadRelative('/query/block/index/' + index);
  }

  async getBlockByHash(hash: string) {
    return this.downloadRelative('/query/block/' + hash);
  }

  async getTransaction(hash: string) {
    return this.downloadRelative('/query/transaction/' + hash);
  }

  async getAddress(address: string, transactions: boolean = false) {
    const options = transactions ? '/transactions' : '';
    return this.downloadRelative('/query/address/' + address + options);
  }

  async getPeers(date: Date) {
    return this.downloadRelative('/stats/peers/' + date.toISOString());
  }

  async getRichlist(offset: number, limit: number) {
    return this.downloadRelative('/insight/richlist?offset=' + offset + '&limit=' + limit);
  }

  async getSupply() {
    return this.downloadRelative('/insight/supply');
  }

  async getWallets() {
    return this.downloadRelative('/insight/wallets');
  }

  async getContractTransaction(hash: string) {
    return this.downloadRelative('/query/cirrus/contract/transaction/' + hash);
  }

  async getContractAddress(address: string) {
    return this.downloadRelative('/query/cirrus/contract/' + address);
  }

  async getContractCode(address: string) {
    return this.downloadRelative('/query/cirrus/contract/code/' + address);
  }

}
