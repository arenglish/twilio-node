/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import serialize = require('../../../base/serialize');
import { FaxMediaList } from './fax/faxMedia';
import { SerializableClass } from '../../../interfaces';

type FaxDirection = 'inbound'|'outbound';

type FaxQuality = 'standard'|'fine'|'superfine';

type FaxStatus = 'queued'|'processing'|'sending'|'delivered'|'receiving'|'received'|'no-answer'|'busy'|'failed'|'canceled';

type FaxUpdateStatus = 'canceled';

/**
 * @description Initialize the FaxList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 */
declare function FaxList(version: V1): FaxListInstance;

/**
 * Options to pass to update
 *
 * @property status - The updated status of this fax
 */
interface FaxInstanceUpdateOptions {
  status?: FaxUpdateStatus;
}

interface FaxListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): FaxContext;
  /**
   * create a FaxInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: FaxListInstanceCreateOptions, callback?: (error: Error | null, items: FaxListInstance) => any): Promise<FaxInstance>;
  /**
   * Streams FaxInstance records from the API.
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
  each(opts?: FaxListInstanceEachOptions, callback?: (item: FaxInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a fax
   *
   * @param sid - A string that uniquely identifies this fax.
   */
  get(sid: string): FaxContext;
  /**
   * Retrieve a single target page of FaxInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: FaxPage) => any): Promise<FaxPage>;
  /**
   * Lists FaxInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: FaxListInstanceOptions, callback?: (error: Error | null, items: FaxInstance[]) => any): Promise<FaxInstance[]>;
  /**
   * Retrieve a single page of FaxInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: FaxListInstancePageOptions, callback?: (error: Error | null, items: FaxPage) => any): Promise<FaxPage>;
}

/**
 * Options to pass to create
 *
 * @property from - Twilio number from which to originate the fax
 * @property mediaUrl - URL that points to the fax media
 * @property quality - The quality of this fax
 * @property sipAuthPassword - Password for SIP authentication
 * @property sipAuthUsername - Username for SIP authentication
 * @property statusCallback - URL for fax status callbacks
 * @property storeMedia - Whether or not to store media
 * @property to - The phone number or SIP address to send the fax to
 * @property ttl - How many minutes to attempt a fax
 */
interface FaxListInstanceCreateOptions {
  from?: string;
  mediaUrl: string;
  quality?: FaxQuality;
  sipAuthPassword?: string;
  sipAuthUsername?: string;
  statusCallback?: string;
  storeMedia?: boolean;
  to: string;
  ttl?: number;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property dateCreatedAfter - Include only faxes created after
 * @property dateCreatedOnOrBefore - Include only faxes created on or before
 * @property done - Function to be called upon completion of streaming
 * @property from - Include only faxes sent from
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
 * @property to - Include only faxes sent to
 */
interface FaxListInstanceEachOptions {
  callback?: (item: FaxInstance, done: (err?: Error) => void) => void;
  dateCreatedAfter?: Date;
  dateCreatedOnOrBefore?: Date;
  done?: Function;
  from?: string;
  limit?: number;
  pageSize?: number;
  to?: string;
}

/**
 * Options to pass to list
 *
 * @property dateCreatedAfter - Include only faxes created after
 * @property dateCreatedOnOrBefore - Include only faxes created on or before
 * @property from - Include only faxes sent from
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
 * @property to - Include only faxes sent to
 */
interface FaxListInstanceOptions {
  dateCreatedAfter?: Date;
  dateCreatedOnOrBefore?: Date;
  from?: string;
  limit?: number;
  pageSize?: number;
  to?: string;
}

/**
 * Options to pass to page
 *
 * @property dateCreatedAfter - Include only faxes created after
 * @property dateCreatedOnOrBefore - Include only faxes created on or before
 * @property from - Include only faxes sent from
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property to - Include only faxes sent to
 */
interface FaxListInstancePageOptions {
  dateCreatedAfter?: Date;
  dateCreatedOnOrBefore?: Date;
  from?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  to?: string;
}

interface FaxPayload extends FaxResource, Page.TwilioResponsePayload {
}

interface FaxResource {
  account_sid: string;
  api_version: string;
  date_created: Date;
  date_updated: Date;
  direction: FaxDirection;
  duration: number;
  from: string;
  links: string;
  media_sid: string;
  media_url: string;
  num_pages: number;
  price: number;
  price_unit: string;
  quality: FaxQuality;
  sid: string;
  status: FaxStatus;
  to: string;
  url: string;
}

interface FaxSolution {
}


declare class FaxPage extends Page<V1, FaxPayload, FaxResource, FaxInstance> {
  /**
   * Initialize the FaxPagePLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: FaxSolution);

  /**
   * Build an instance of FaxInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FaxPayload): FaxInstance;
}


declare class FaxInstance extends SerializableClass {
  /**
   * Initialize the FaxContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - A string that uniquely identifies this fax.
   * @property accountSid - Account SID
   * @property from - The party that sent the fax
   * @property to - The party that received the fax
   * @property quality - The quality of this fax
   * @property mediaSid - Media SID
   * @property mediaUrl - URL pointing to fax media
   * @property numPages - Number of pages
   * @property duration - The time taken to transmit the fax
   * @property status - The status of this fax
   * @property direction - The direction of this fax
   * @property apiVersion - The API version used
   * @property price - Fax transmission price
   * @property priceUnit - Currency used for billing
   * @property dateCreated - The date this fax was created
   * @property dateUpdated - The date this fax was updated
   * @property links - Nested resource URLs
   * @property url - The URL of this resource
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - A string that uniquely identifies this fax.
   */
  constructor(version: V1, payload: FaxPayload, sid: string);

  private _proxy: FaxContext;
  accountSid: string;
  apiVersion: string;
  dateCreated: Date;
  dateUpdated: Date;
  direction: FaxDirection;
  duration: number;
  /**
   * fetch a FaxInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FaxInstance) => any): void;
  from: string;
  links: string;
  /**
   * Access the media
   */
  media();
  mediaSid: string;
  mediaUrl: string;
  numPages: number;
  price: number;
  priceUnit: string;
  quality: FaxQuality;
  /**
   * remove a FaxInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: FaxInstance) => any): void;
  sid: string;
  status: FaxStatus;
  to: string;
  /**
   * Produce a plain JSON object version of the FaxInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  /**
   * update a FaxInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: FaxInstanceUpdateOptions, callback?: (error: Error | null, items: FaxInstance) => any): void;
  url: string;
}


declare class FaxContext {
  /**
   * Initialize the FaxContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property media - media resource
   *
   * @param version - Version of the resource
   * @param sid - A string that uniquely identifies this fax.
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a FaxInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FaxInstance) => any): void;
  media?: Twilio.Fax.V1.FaxContext.FaxMediaList;
  /**
   * remove a FaxInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: FaxInstance) => any): void;
  /**
   * update a FaxInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: FaxInstanceUpdateOptions, callback?: (error: Error | null, items: FaxInstance) => any): void;
}

export { FaxContext, FaxInstance, FaxList, FaxListInstance, FaxListInstanceCreateOptions, FaxListInstanceEachOptions, FaxListInstanceOptions, FaxListInstancePageOptions, FaxPage, FaxPayload, FaxResource, FaxSolution }
