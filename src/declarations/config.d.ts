declare module "config" {
  export interface Config {
    marketingUrl: string;
  }
  let instance: Config;
  export default instance;
}
