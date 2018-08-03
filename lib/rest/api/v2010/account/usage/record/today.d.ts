/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../base/Page');
import Response = require('../../../../../../http/response');
import V2010 = require('../../../../V2010');
import serialize = require('../../../../../../base/serialize');
import { SerializableClass } from '../../../../../../interfaces';

type TodayCategory = 'answering-machine-detection'|'authy-authentications'|'authy-calls-outbound'|'authy-monthly-fees'|'authy-phone-intelligence'|'authy-phone-verifications'|'authy-sms-outbound'|'call-progess-events'|'calleridlookups'|'calls'|'calls-client'|'calls-globalconference'|'calls-inbound'|'calls-inbound-local'|'calls-inbound-mobile'|'calls-inbound-tollfree'|'calls-outbound'|'calls-recordings'|'calls-sip'|'calls-sip-inbound'|'calls-sip-outbound'|'carrier-lookups'|'conversations'|'conversations-api-requests'|'conversations-conversation-events'|'conversations-endpoint-connectivity'|'conversations-events'|'conversations-participant-events'|'conversations-participants'|'cps'|'fraud-lookups'|'group-rooms'|'group-rooms-data-track'|'group-rooms-encrypted-media-recorded'|'group-rooms-media-downloaded'|'group-rooms-media-recorded'|'group-rooms-media-routed'|'group-rooms-media-stored'|'group-rooms-participant-minutes'|'group-rooms-recorded-minutes'|'ip-messaging'|'ip-messaging-commands'|'ip-messaging-data-storage'|'ip-messaging-data-transfer'|'ip-messaging-endpoint-connectivity'|'lookups'|'marketplace'|'marketplace-algorithmia-named-entity-recognition'|'marketplace-digital-segment-business-info'|'marketplace-google-speech-to-text'|'marketplace-ibm-watson-message-insights'|'marketplace-ibm-watson-message-sentiment'|'marketplace-ibm-watson-recording-analysis'|'marketplace-icehook-systems-scout'|'marketplace-infogroup-dataaxle-bizinfo'|'marketplace-cadence-transcription'|'marketplace-cadence-translation'|'marketplace-capio-speech-to-text'|'marketplace-facebook-offline-conversions'|'marketplace-keen-io-contact-center-analytics'|'marketplace-marchex-cleancall'|'marketplace-marchex-sentiment-analysis-for-sms'|'marketplace-marketplace-nextcaller-social-id'|'marketplace-mobile-commons-opt-out-classifier'|'marketplace-nexiwave-voicemail-to-text'|'marketplace-nextcaller-advanced-caller-identification'|'marketplace-nomorobo-spam-score'|'marketplace-payfone-tcpa-compliance'|'marketplace-telo-opencnam'|'marketplace-truecnam-true-spam'|'marketplace-twilio-caller-name-lookup-us'|'marketplace-twilio-carrier-information-lookup'|'marketplace-voicebase-pci'|'marketplace-voicebase-transcription'|'marketplace-whitepages-pro-caller-identification'|'marketplace-whitepages-pro-phone-intelligence'|'marketplace-whitepages-pro-phone-reputation'|'marketplace-wolfram-short-answer'|'marketplace-wolfarm-spoken-results'|'marketplace-deepgram-phrase-detector'|'marketplace-convriza-ababa'|'marketplace-ibm-watson-tone-analyzer'|'marketplace-remeeting-automatic-speech-recognition'|'marketplace-tcpa-defense-solutions-blacklist-feed'|'marketplace-voicebase-transcription-custom-vocabulary'|'marketplace-ytica-contact-center-reporting-analytics'|'mediastorage'|'mms'|'mms-inbound'|'mms-inbound-longcode'|'mms-inbound-shortcode'|'mms-outbound'|'mms-outbound-longcode'|'mms-outbound-shortcode'|'monitor-reads'|'monitor-storage'|'monitor-writes'|'notify'|'notify-actions-attempts'|'notify-channels'|'number-format-lookups'|'pchat'|'pchat-actions'|'pchat-aps'|'pchat-notifications'|'pchat-reads'|'pchat-users'|'pchat-messages'|'peer-to-peer-rooms-participant-minutes'|'pfax'|'pfax-minutes'|'pfax-minutes-inbound'|'pfax-minutes-outbound'|'pfax-pages'|'phonenumbers'|'phonenumbers-cps'|'phonenumbers-emergency'|'phonenumbers-local'|'phonenumbers-mobile'|'phonenumbers-setups'|'phonenumbers-tollfree'|'premiumsupport'|'proxy'|'pv'|'pv-composition-media-downloaded'|'pv-composition-media-encrypted'|'pv-composition-media-stored'|'pv-composition-minutes'|'pv-recording-compositions'|'pv-room-participants'|'pv-room-participants-au1'|'pv-room-participants-br1'|'pv-room-participants-ie1'|'pv-room-participants-jp1'|'pv-room-participants-sg1'|'pv-room-participants-us1'|'pv-room-participants-us2'|'pv-rooms'|'pv-sip-endpoint-registrations'|'recordings'|'recordingstorage'|'rooms-group-minutes'|'rooms-group-bandwidth'|'rooms-peer-to-peer-minutes'|'shortcodes'|'shortcodes-customerowned'|'shortcodes-mms-enablement'|'shortcodes-mps'|'shortcodes-random'|'shortcodes-uk'|'shortcodes-vanity'|'sms'|'sms-inbound'|'sms-inbound-longcode'|'sms-inbound-shortcode'|'sms-outbound'|'sms-outbound-content-inspection'|'sms-outbound-longcode'|'sms-outbound-shortcode'|'sms-messages-features'|'sms-messages-features-senderid'|'speech-recognition'|'studio-engagements'|'sync'|'sync-actions'|'sync-endpoint-hours'|'sync-endpoint-hours-above-daily-cap'|'taskrouter-tasks'|'totalprice'|'transcriptions'|'trunking-cps'|'trunking-emergency-calls'|'trunking-origination'|'trunking-origination-local'|'trunking-origination-mobile'|'trunking-origination-tollfree'|'trunking-recordings'|'trunking-secure'|'trunking-termination'|'turnmegabytes'|'turnmegabytes-australia'|'turnmegabytes-brasil'|'turnmegabytes-india'|'turnmegabytes-ireland'|'turnmegabytes-japan'|'turnmegabytes-singapore'|'turnmegabytes-useast'|'turnmegabytes-uswest'|'twilio-interconnect'|'video-recordings'|'voice-insights'|'voice-insights-client-insights-on-demand-minute'|'voice-insights-ptsn-insights-on-demand-minute'|'voice-insights-sip-interface-insights-on-demand-minute'|'voice-insights-sip-trunking-insights-on-demand-minute'|'wireless'|'wireless-orders'|'wireless-orders-artwork'|'wireless-orders-bulk'|'wireless-orders-esim'|'wireless-orders-starter'|'wireless-usage'|'wireless-usage-commands'|'wireless-usage-commands-africa'|'wireless-usage-commands-asia'|'wireless-usage-commands-centralandsouthamerica'|'wireless-usage-commands-europe'|'wireless-usage-commands-home'|'wireless-usage-commands-northamerica'|'wireless-usage-commands-oceania'|'wireless-usage-commands-roaming'|'wireless-usage-data'|'wireless-usage-data-africa'|'wireless-usage-data-asia'|'wireless-usage-data-centralandsouthamerica'|'wireless-usage-data-custom-additionalmb'|'wireless-usage-data-custom-first5mb'|'wireless-usage-data-domestic-roaming'|'wireless-usage-data-europe'|'wireless-usage-data-individual-additionalgb'|'wireless-usage-data-individual-firstgb'|'wireless-usage-data-international-roaming-canada'|'wireless-usage-data-international-roaming-india'|'wireless-usage-data-international-roaming-mexico'|'wireless-usage-data-northamerica'|'wireless-usage-data-oceania'|'wireless-usage-data-pooled'|'wireless-usage-data-pooled-downlink'|'wireless-usage-data-pooled-uplink'|'wireless-usage-mrc'|'wireless-usage-mrc-custom'|'wireless-usage-mrc-individual'|'wireless-usage-mrc-pooled'|'wireless-usage-mrc-suspended'|'wireless-usage-voice'|'wireless-usage-sms';

/**
 * @description Initialize the TodayList
 *
 * @param version - Version of the resource
 * @param accountSid - A 34 character string that uniquely identifies this resource.
 */
declare function TodayList(version: V2010, accountSid: string): TodayListInstance;

interface TodayListInstance {
  /**
   * Streams TodayInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: TodayListInstanceEachOptions, callback?: (item: TodayInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of TodayInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: TodayPage) => any): Promise<TodayPage>;
  /**
   * Lists TodayInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: TodayListInstanceOptions, callback?: (error: Error | null, items: TodayInstance[]) => any): Promise<TodayInstance[]>;
  /**
   * Retrieve a single page of TodayInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: TodayListInstancePageOptions, callback?: (error: Error | null, items: TodayPage) => any): Promise<TodayPage>;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property category - Only include usage of this usage category.
 * @property done - Function to be called upon completion of streaming
 * @property endDate - Only include usage that has occurred on or before this date.
 * @property includeSubaccounts - The include_subaccounts
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property startDate - Only include usage that has occurred on or after this date.
 */
interface TodayListInstanceEachOptions {
  callback?: (item: TodayInstance, done: (err?: Error) => void) => void;
  category?: TodayCategory;
  done?: Function;
  endDate?: Date;
  includeSubaccounts?: boolean;
  limit?: number;
  pageSize?: number;
  startDate?: Date;
}

/**
 * Options to pass to list
 *
 * @property category - Only include usage of this usage category.
 * @property endDate - Only include usage that has occurred on or before this date.
 * @property includeSubaccounts - The include_subaccounts
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 * @property startDate - Only include usage that has occurred on or after this date.
 */
interface TodayListInstanceOptions {
  category?: TodayCategory;
  endDate?: Date;
  includeSubaccounts?: boolean;
  limit?: number;
  pageSize?: number;
  startDate?: Date;
}

/**
 * Options to pass to page
 *
 * @property category - Only include usage of this usage category.
 * @property endDate - Only include usage that has occurred on or before this date.
 * @property includeSubaccounts - The include_subaccounts
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property startDate - Only include usage that has occurred on or after this date.
 */
interface TodayListInstancePageOptions {
  category?: TodayCategory;
  endDate?: Date;
  includeSubaccounts?: boolean;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  startDate?: Date;
}

interface TodayPayload extends TodayResource, Page.TwilioResponsePayload {
}

interface TodayResource {
  account_sid: string;
  api_version: string;
  category: TodayCategory;
  count: string;
  count_unit: string;
  description: string;
  end_date: Date;
  price: number;
  price_unit: string;
  start_date: Date;
  subresource_uris: string;
  uri: string;
  usage: string;
  usage_unit: string;
}

interface TodaySolution {
  accountSid?: string;
}


declare class TodayInstance extends SerializableClass {
  /**
   * Initialize the TodayContext
   *
   * @property accountSid - The Account that accrued the usage.
   * @property apiVersion - The api_version
   * @property category - The category of usage.
   * @property count - The number of usage events.
   * @property countUnit - The units in which Count is measured.
   * @property description - A human-readable description of the usage category.
   * @property endDate - The last date for which usage is included in this UsageRecord, formatted as YYYY-MM-DD.
   * @property price - The total price of the usage, in the currency associated with the account.
   * @property priceUnit - The currency in which Price is measured, in ISO 4127 format.
   * @property startDate - The first date for which usage is included in this UsageRecord, formatted as YYYY-MM-DD.
   * @property subresourceUris - Subresource Uris for this UsageRecord.
   * @property uri - The URI that returns only this UsageRecord, relative to https://api.
   * @property usage - The amount of billed usage.
   * @property usageUnit - The units in which Usage is measured.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: V2010, payload: TodayPayload, accountSid: string);

  accountSid: string;
  apiVersion: string;
  category: TodayCategory;
  count: string;
  countUnit: string;
  description: string;
  endDate: Date;
  price: number;
  priceUnit: string;
  startDate: Date;
  subresourceUris: string;
  /**
   * Produce a plain JSON object version of the TodayInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  uri: string;
  usage: string;
  usageUnit: string;
}


declare class TodayPage extends Page<V2010, TodayPayload, TodayResource, TodayInstance> {
  /**
   * Initialize the TodayPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: TodaySolution);

  /**
   * Build an instance of TodayInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: TodayPayload): TodayInstance;
}

export { TodayInstance, TodayList, TodayListInstance, TodayListInstanceEachOptions, TodayListInstanceOptions, TodayListInstancePageOptions, TodayPage, TodayPayload, TodayResource, TodaySolution }
