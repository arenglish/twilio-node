/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { SerializableClass } from '../../../../interfaces';

type PhoneNumberAddressRequirement = 'none'|'any'|'local'|'foreign';

/**
 * @description Initialize the PhoneNumberList
 *
 * @param version - Version of the resource
 * @param trunkSid - The trunk_sid
 */
declare function PhoneNumberList(version: V1, trunkSid: string): PhoneNumberListInstance;

interface PhoneNumberListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): PhoneNumberContext;
  /**
   * create a PhoneNumberInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: PhoneNumberListInstanceCreateOptions, callback?: (error: Error | null, items: PhoneNumberListInstance) => any): Promise<PhoneNumberInstance>;
  /**
   * Streams PhoneNumberInstance records from the API.
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
  each(opts?: PhoneNumberListInstanceEachOptions, callback?: (item: PhoneNumberInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a phone_number
   *
   * @param sid - The sid
   */
  get(sid: string): PhoneNumberContext;
  /**
   * Retrieve a single target page of PhoneNumberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: PhoneNumberPage) => any): Promise<PhoneNumberPage>;
  /**
   * Lists PhoneNumberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: PhoneNumberListInstanceOptions, callback?: (error: Error | null, items: PhoneNumberInstance[]) => any): Promise<PhoneNumberInstance[]>;
  /**
   * Retrieve a single page of PhoneNumberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: PhoneNumberListInstancePageOptions, callback?: (error: Error | null, items: PhoneNumberPage) => any): Promise<PhoneNumberPage>;
}

/**
 * Options to pass to create
 *
 * @property phoneNumberSid - The SID of the Incoming Phone Number that you want to associate with this trunk.
 */
interface PhoneNumberListInstanceCreateOptions {
  phoneNumberSid: string;
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
interface PhoneNumberListInstanceEachOptions {
  callback?: (item: PhoneNumberInstance, done: (err?: Error) => void) => void;
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
interface PhoneNumberListInstanceOptions {
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
interface PhoneNumberListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface PhoneNumberPayload extends PhoneNumberResource, Page.TwilioResponsePayload {
}

interface PhoneNumberResource {
  account_sid: string;
  address_requirements: PhoneNumberAddressRequirement;
  api_version: string;
  beta: boolean;
  capabilities: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  links: string;
  phone_number: string;
  sid: string;
  sms_application_sid: string;
  sms_fallback_method: string;
  sms_fallback_url: string;
  sms_method: string;
  sms_url: string;
  status_callback: string;
  status_callback_method: string;
  trunk_sid: string;
  url: string;
  voice_application_sid: string;
  voice_caller_id_lookup: boolean;
  voice_fallback_method: string;
  voice_fallback_url: string;
  voice_method: string;
  voice_url: string;
}

interface PhoneNumberSolution {
  trunkSid?: string;
}


declare class PhoneNumberPage extends Page<V1, PhoneNumberPayload, PhoneNumberResource, PhoneNumberInstance> {
  /**
   * Initialize the PhoneNumberPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: PhoneNumberSolution);

  /**
   * Build an instance of PhoneNumberInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: PhoneNumberPayload): PhoneNumberInstance;
}


declare class PhoneNumberInstance extends SerializableClass {
  /**
   * Initialize the PhoneNumberContext
   *
   * @property accountSid - The account_sid
   * @property addressRequirements - The address_requirements
   * @property apiVersion - The api_version
   * @property beta - The beta
   * @property capabilities - The capabilities
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property friendlyName - The friendly_name
   * @property links - The links
   * @property phoneNumber - The phone_number
   * @property sid - The sid
   * @property smsApplicationSid - The sms_application_sid
   * @property smsFallbackMethod - The sms_fallback_method
   * @property smsFallbackUrl - The sms_fallback_url
   * @property smsMethod - The sms_method
   * @property smsUrl - The sms_url
   * @property statusCallback - The status_callback
   * @property statusCallbackMethod - The status_callback_method
   * @property trunkSid - The trunk_sid
   * @property url - The url
   * @property voiceApplicationSid - The voice_application_sid
   * @property voiceCallerIdLookup - The voice_caller_id_lookup
   * @property voiceFallbackMethod - The voice_fallback_method
   * @property voiceFallbackUrl - The voice_fallback_url
   * @property voiceMethod - The voice_method
   * @property voiceUrl - The voice_url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param trunkSid - The trunk_sid
   * @param sid - The sid
   */
  constructor(version: V1, payload: PhoneNumberPayload, trunkSid: string, sid: string);

  private _proxy: PhoneNumberContext;
  accountSid: string;
  addressRequirements: PhoneNumberAddressRequirement;
  apiVersion: string;
  beta: boolean;
  capabilities: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a PhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: PhoneNumberInstance) => any): void;
  friendlyName: string;
  links: string;
  phoneNumber: string;
  /**
   * remove a PhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: PhoneNumberInstance) => any): void;
  sid: string;
  smsApplicationSid: string;
  smsFallbackMethod: string;
  smsFallbackUrl: string;
  smsMethod: string;
  smsUrl: string;
  statusCallback: string;
  statusCallbackMethod: string;
  /**
   * Produce a plain JSON object version of the PhoneNumberInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  trunkSid: string;
  url: string;
  voiceApplicationSid: string;
  voiceCallerIdLookup: boolean;
  voiceFallbackMethod: string;
  voiceFallbackUrl: string;
  voiceMethod: string;
  voiceUrl: string;
}


declare class PhoneNumberContext {
  /**
   * Initialize the PhoneNumberContext
   *
   * @param version - Version of the resource
   * @param trunkSid - The trunk_sid
   * @param sid - The sid
   */
  constructor(version: V1, trunkSid: string, sid: string);

  /**
   * fetch a PhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: PhoneNumberInstance) => any): void;
  /**
   * remove a PhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: PhoneNumberInstance) => any): void;
}

export { PhoneNumberContext, PhoneNumberInstance, PhoneNumberList, PhoneNumberListInstance, PhoneNumberListInstanceCreateOptions, PhoneNumberListInstanceEachOptions, PhoneNumberListInstanceOptions, PhoneNumberListInstancePageOptions, PhoneNumberPage, PhoneNumberPayload, PhoneNumberResource, PhoneNumberSolution }
