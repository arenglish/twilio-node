/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../../../base/Page');
import Response = require('../../../../../../../../http/response');
import V2010 = require('../../../../../../V2010');
import { SerializableClass } from '../../../../../../../../interfaces';

/**
 * @description Initialize the AuthCallsIpAccessControlListMappingList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique id of the account that sent the message
 * @param domainSid - A string that uniquely identifies the SIP Domain
 */
declare function AuthCallsIpAccessControlListMappingList(version: V2010, accountSid: string, domainSid: string): AuthCallsIpAccessControlListMappingListInstance;

interface AuthCallsIpAccessControlListMappingListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): AuthCallsIpAccessControlListMappingContext;
  /**
   * create a AuthCallsIpAccessControlListMappingInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: AuthCallsIpAccessControlListMappingListInstanceCreateOptions, callback?: (error: Error | null, items: AuthCallsIpAccessControlListMappingListInstance) => any): Promise<AuthCallsIpAccessControlListMappingInstance>;
  /**
   * Streams AuthCallsIpAccessControlListMappingInstance records from the API.
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
  each(opts?: AuthCallsIpAccessControlListMappingListInstanceEachOptions, callback?: (item: AuthCallsIpAccessControlListMappingInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a auth_calls_ip_access_control_list_mapping
   *
   * @param sid - Fetch by unique IP Access Control List Sid
   */
  get(sid: string): AuthCallsIpAccessControlListMappingContext;
  /**
   * Retrieve a single target page of AuthCallsIpAccessControlListMappingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: AuthCallsIpAccessControlListMappingPage) => any): Promise<AuthCallsIpAccessControlListMappingPage>;
  /**
   * Lists AuthCallsIpAccessControlListMappingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: AuthCallsIpAccessControlListMappingListInstanceOptions, callback?: (error: Error | null, items: AuthCallsIpAccessControlListMappingInstance[]) => any): Promise<AuthCallsIpAccessControlListMappingInstance[]>;
  /**
   * Retrieve a single page of AuthCallsIpAccessControlListMappingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: AuthCallsIpAccessControlListMappingListInstancePageOptions, callback?: (error: Error | null, items: AuthCallsIpAccessControlListMappingPage) => any): Promise<AuthCallsIpAccessControlListMappingPage>;
}

/**
 * Options to pass to create
 *
 * @property ipAccessControlListSid - A string that uniquely identifies IP Access Control List
 */
interface AuthCallsIpAccessControlListMappingListInstanceCreateOptions {
  ipAccessControlListSid: string;
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
interface AuthCallsIpAccessControlListMappingListInstanceEachOptions {
  callback?: (item: AuthCallsIpAccessControlListMappingInstance, done: (err?: Error) => void) => void;
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
interface AuthCallsIpAccessControlListMappingListInstanceOptions {
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
interface AuthCallsIpAccessControlListMappingListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface AuthCallsIpAccessControlListMappingPayload extends AuthCallsIpAccessControlListMappingResource, Page.TwilioResponsePayload {
}

interface AuthCallsIpAccessControlListMappingResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  sid: string;
}

interface AuthCallsIpAccessControlListMappingSolution {
  accountSid?: string;
  domainSid?: string;
}


declare class AuthCallsIpAccessControlListMappingPage extends Page<V2010, AuthCallsIpAccessControlListMappingPayload, AuthCallsIpAccessControlListMappingResource, AuthCallsIpAccessControlListMappingInstance> {
  /**
   * Initialize the AuthCallsIpAccessControlListMappingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: AuthCallsIpAccessControlListMappingSolution);

  /**
   * Build an instance of AuthCallsIpAccessControlListMappingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AuthCallsIpAccessControlListMappingPayload): AuthCallsIpAccessControlListMappingInstance;
}


declare class AuthCallsIpAccessControlListMappingInstance extends SerializableClass {
  /**
   * Initialize the AuthCallsIpAccessControlListMappingContext
   *
   * @property accountSid - The unique sid that identifies this account
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property friendlyName - A human readable description of this resource
   * @property sid - A string that uniquely identifies this resource
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique id of the account that sent the message
   * @param domainSid - A string that uniquely identifies the SIP Domain
   * @param sid - Fetch by unique IP Access Control List Sid
   */
  constructor(version: V2010, payload: AuthCallsIpAccessControlListMappingPayload, accountSid: string, domainSid: string, sid: string);

  private _proxy: AuthCallsIpAccessControlListMappingContext;
  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a AuthCallsIpAccessControlListMappingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AuthCallsIpAccessControlListMappingInstance) => any): void;
  friendlyName: string;
  /**
   * remove a AuthCallsIpAccessControlListMappingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: AuthCallsIpAccessControlListMappingInstance) => any): void;
  sid: string;
  /**
   * Produce a plain JSON object version of the AuthCallsIpAccessControlListMappingInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
}


declare class AuthCallsIpAccessControlListMappingContext {
  /**
   * Initialize the AuthCallsIpAccessControlListMappingContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param domainSid - The domain_sid
   * @param sid - Fetch by unique IP Access Control List Sid
   */
  constructor(version: V2010, accountSid: string, domainSid: string, sid: string);

  /**
   * fetch a AuthCallsIpAccessControlListMappingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AuthCallsIpAccessControlListMappingInstance) => any): void;
  /**
   * remove a AuthCallsIpAccessControlListMappingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: AuthCallsIpAccessControlListMappingInstance) => any): void;
}

export { AuthCallsIpAccessControlListMappingContext, AuthCallsIpAccessControlListMappingInstance, AuthCallsIpAccessControlListMappingList, AuthCallsIpAccessControlListMappingListInstance, AuthCallsIpAccessControlListMappingListInstanceCreateOptions, AuthCallsIpAccessControlListMappingListInstanceEachOptions, AuthCallsIpAccessControlListMappingListInstanceOptions, AuthCallsIpAccessControlListMappingListInstancePageOptions, AuthCallsIpAccessControlListMappingPage, AuthCallsIpAccessControlListMappingPayload, AuthCallsIpAccessControlListMappingResource, AuthCallsIpAccessControlListMappingSolution }
