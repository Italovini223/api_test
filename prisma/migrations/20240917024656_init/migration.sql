-- CreateTable
CREATE TABLE "bi_ads_data" (
    "bi_ads_data_id" SERIAL NOT NULL,
    "bi_ads_data_dtc" TIMESTAMP(3) NOT NULL,
    "bi_ads_data_dta" TIMESTAMP(3) NOT NULL,
    "bi_ads_token_id" INTEGER NOT NULL,
    "os_clientes_id" INTEGER NOT NULL,
    "bi_ads_provedor_id" INTEGER NOT NULL,
    "bi_ads_data_date_start" TIMESTAMP(3) NOT NULL,
    "bi_ads_data_date_stop" TIMESTAMP(3) NOT NULL,
    "bi_ads_data_campaign_id" INTEGER NOT NULL,
    "bi_ads_data_campaign_spend" DOUBLE PRECISION NOT NULL,
    "bi_ads_data_impressions" INTEGER NOT NULL,
    "bi_ads_data_clicks" INTEGER NOT NULL,
    "bi_ads_data_cpc" DOUBLE PRECISION NOT NULL,
    "bi_ads_data_ctr" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "bi_ads_data_pkey" PRIMARY KEY ("bi_ads_data_id")
);
