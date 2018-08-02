/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { PhoneNumberList } from './service/phoneNumber';
import { SerializableClass } from '../../../interfaces';
import { SessionList } from './service/session';
import { ShortCodeList } from './service/shortCode';

type ServiceGeoMatchLevel = 'area-code'|'overlay'|'radius'|'country';

type ServiceNumberSelectionBehavior = 'avoid-sticky'|'prefer-sticky';

/**
 * @description Initialize the ServiceList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 */
declare function ServiceList(version: V1): ServiceListInstance;

/**
 * Options to pass to update
 *
 * @property callbackUrl - URL Twilio will send callbacks to
 * @property defaultTtl - Default TTL for Sessions in Service, in seconds.
 * @property geoMatchLevel - Whether proxy number selected must be in the same area code as the participant identifier.
 * @property interceptCallbackUrl - A URL for Twilio call before each Interaction.
 * @property numberSelectionBehavior - What behavior to use when choosing a proxy number.
 * @property outOfSessionCallbackUrl - A URL for Twilio call when a new Interaction has no Session.
 * @property uniqueName - A human-readable description of this resource.
 */
interface ServiceInstanceUpdateOptions {
  callbackUrl?: string;
  defaultTtl?: number;
  geoMatchLevel?: ServiceGeoMatchLevel;
  interceptCallbackUrl?: string;
  numberSelectionBehavior?: ServiceNumberSelectionBehavior;
  outOfSessionCallbackUrl?: string;
  uniqueName?: string;
}

interface ServiceListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ServiceContext;
  /**
   * create a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: ServiceListInstanceCreateOptions, callback?: (error: Error | null, items: ServiceListInstance) => any): Promise<ServiceInstance>;
  /**
   * Streams ServiceInstance records from the API.
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
  each(opts?: ServiceListInstanceEachOptions, callback?: (item: ServiceInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a service
   *
   * @param sid - A string that uniquely identifies this Service.
   */
  get(sid: string): ServiceContext;
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ServiceListInstanceOptions, callback?: (error: Error | null, items: ServiceInstance[]) => any): Promise<ServiceInstance[]>;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ServiceListInstancePageOptions, callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
}

/**
 * Options to pass to create
 *
 * @property callbackUrl - URL Twilio will send callbacks to
 * @property defaultTtl - Default TTL for Sessions in Service, in seconds.
 * @property geoMatchLevel - Whether proxy number selected must be in the same area code as the participant identifier.
 * @property interceptCallbackUrl - A URL for Twilio call before each Interaction.
 * @property numberSelectionBehavior - What behavior to use when choosing a proxy number.
 * @property outOfSessionCallbackUrl - A URL for Twilio call when a new Interaction has no Session.
 * @property uniqueName - The human-readable string that uniquely identifies this Service.
 */
interface ServiceListInstanceCreateOptions {
  callbackUrl?: string;
  defaultTtl?: number;
  geoMatchLevel?: ServiceGeoMatchLevel;
  interceptCallbackUrl?: string;
  numberSelectionBehavior?: ServiceNumberSelectionBehavior;
  outOfSessionCallbackUrl?: string;
  uniqueName: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
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
 */
interface ServiceListInstanceEachOptions {
  callback?: (item: ServiceInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
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
 */
interface ServiceListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface ServiceListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface ServicePayload extends ServiceResource, Page.TwilioResponsePayload {
}

interface ServiceResource {
  account_sid: string;
  callback_url: string;
  date_created: Date;
  date_updated: Date;
  default_ttl: number;
  geo_match_level: ServiceGeoMatchLevel;
  intercept_callback_url: string;
  links: string;
  number_selection_behavior: ServiceNumberSelectionBehavior;
  out_of_session_callback_url: string;
  sid: string;
  unique_name: string;
  url: string;
}

interface ServiceSolution {
}


declare class ServicePage extends Page<V1, ServicePayload, ServiceResource, ServiceInstance> {
  /**
   * Initialize the ServicePagePLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: ServiceSolution);

  /**
   * Build an instance of ServiceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ServicePayload): ServiceInstance;
}


declare class ServiceInstance extends SerializableClass {
  /**
   * Initialize the ServiceContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - A string that uniquely identifies this Service.
   * @property uniqueName - A human-readable description of this resource.
   * @property accountSid - Account Sid.
   * @property callbackUrl - URL Twilio will send callbacks to
   * @property defaultTtl - Default TTL for a Session, in seconds.
   * @property numberSelectionBehavior - What behavior to use when choosing a proxy number.
   * @property geoMatchLevel - Whether proxy number selected must be in the same area code as the participant identifier.
   * @property interceptCallbackUrl - A URL for Twilio call before each Interaction.
   * @property outOfSessionCallbackUrl - A URL for Twilio call when a new Interaction has no Session.
   * @property dateCreated - The date this Service was created
   * @property dateUpdated - The date this Service was last updated
   * @property url - The URL of this resource.
   * @property links - Nested resource URLs.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - A string that uniquely identifies this Service.
   */
  constructor(version: V1, payload: ServicePayload, sid: string);

  private _proxy: ServiceContext;
  accountSid: string;
  callbackUrl: string;
  dateCreated: Date;
  dateUpdated: Date;
  defaultTtl: number;
  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ServiceInstance) => any): void;
  geoMatchLevel: service.geo_match_level;
  interceptCallbackUrl: string;
  links: string;
  numberSelectionBehavior: service.number_selection_behavior;
  outOfSessionCallbackUrl: string;
  /**
   * Access the phoneNumbers
   */
  phoneNumbers();
  /**
   * remove a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * Access the sessions
   */
  sessions();
  /**
   * Access the shortCodes
   */
  shortCodes();
  sid: string;
  /**
   * Produce a plain JSON object version of the ServiceInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  uniqueName: string;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ServiceInstanceUpdateOptions, callback?: (error: Error | null, items: ServiceInstance) => any): void;
  url: string;
}


declare class ServiceContext {
  /**
   * Initialize the ServiceContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sessions - sessions resource
   * @property phoneNumbers - phoneNumbers resource
   * @property shortCodes - shortCodes resource
   *
   * @param version - Version of the resource
   * @param sid - A string that uniquely identifies this Service.
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ServiceInstance) => any): void;
  phoneNumbers?: Twilio.Proxy.V1.ServiceContext.PhoneNumberList;
  /**
   * remove a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ServiceInstance) => any): void;
  sessions?: Twilio.Proxy.V1.ServiceContext.SessionList;
  shortCodes?: Twilio.Proxy.V1.ServiceContext.ShortCodeList;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ServiceInstanceUpdateOptions, callback?: (error: Error | null, items: ServiceInstance) => any): void;
}

export { ServiceContext, ServiceInstance, ServiceList, ServiceListInstance, ServiceListInstanceCreateOptions, ServiceListInstanceEachOptions, ServiceListInstanceOptions, ServiceListInstancePageOptions, ServicePage, ServicePayload, ServiceResource, ServiceSolution }
