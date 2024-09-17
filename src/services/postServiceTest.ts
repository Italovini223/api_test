import { prismaClient } from '../prisma';

export type BiAdsData = {
  bi_ads_data_id?: number;
  bi_ads_data_dtc: Date;
  bi_ads_data_dta: Date;
  bi_ads_token_id: number;
  os_clientes_id: number;
  bi_ads_provedor_id: number;
  bi_ads_data_date_start: Date;
  bi_ads_data_date_stop: Date;
  bi_ads_data_campaign_id: number;
  bi_ads_data_campaign_spend: number;
  bi_ads_data_impressions: number;
  bi_ads_data_clicks: number;
  bi_ads_data_cpc: number;
  bi_ads_data_ctr: number;
}

export class PostServiceTest {
  async execute(data: BiAdsData[]) {
    try {
      await Promise.all(data.map(async (item) => {
        await prismaClient.bi_ads_data.create({
          data: {
            bi_ads_data_dtc: item.bi_ads_data_dtc,
            bi_ads_data_dta: item.bi_ads_data_dta,
            bi_ads_token_id: item.bi_ads_token_id,
            os_clientes_id: item.os_clientes_id,
            bi_ads_provedor_id: item.bi_ads_provedor_id,
            bi_ads_data_date_start: item.bi_ads_data_date_start,
            bi_ads_data_date_stop: item.bi_ads_data_date_stop,
            bi_ads_data_campaign_id: item.bi_ads_data_campaign_id,
            bi_ads_data_campaign_spend: item.bi_ads_data_campaign_spend,
            bi_ads_data_impressions: item.bi_ads_data_impressions,
            bi_ads_data_clicks: item.bi_ads_data_clicks,
            bi_ads_data_cpc: item.bi_ads_data_cpc,
            bi_ads_data_ctr: item.bi_ads_data_ctr
          }
        });
      }));
      
    } catch (error) {
      throw error;
    }
  }
}