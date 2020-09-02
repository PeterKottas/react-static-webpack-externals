declare module "config" {
  export interface Config {
    marketingUrl: string;
    dashboardUrl: string;
    guestWebUrl: string;
    demoHotelSlug: string;
    guestAndroidUrl: string;
    googleTagsManagerId: string;
    googleTagsManagerAuth: string;
    googleTagsManagerPreview: string;
    directChatLink: string;
    buildVersion: string;
    buildBranch: string;
    buildCommitHash: string;
    buildFor: string;
    buildOn: string;
    apiUrl: string;
    apiUrlPlanMeta: string;
    apiUrlIntegrationMeta: string;
    docsUrl: string;
    swEnabled: boolean;
  }
  let instance: Config;
  export default instance;
}
