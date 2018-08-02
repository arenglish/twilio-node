/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import serialize = require('../../../../base/serialize');
import { SerializableClass } from '../../../../interfaces';

type ConnectAppPermission = 'get-all'|'post-all';

/**
 * @description Initialize the ConnectAppList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique sid that identifies this account
 */
declare function ConnectAppList(version: V2010, accountSid: string): ConnectAppListInstance;

/**
 * Options to pass to update
 *
 * @property authorizeRedirectUrl - URIL Twilio sends requests when users authorize
 * @property companyName - The company name set for this Connect App.
 * @property deauthorizeCallbackMethod - HTTP method Twilio WIll use making requests to the url
 * @property deauthorizeCallbackUrl - URL Twilio will send a request when a user de-authorizes this app
 * @property description - A more detailed human readable description
 * @property friendlyName - A human readable name for the Connect App.
 * @property homepageUrl - The URL users can obtain more information
 * @property permissions - The set of permissions that your ConnectApp requests.
 */
interface ConnectAppInstanceUpdateOptions {
  authorizeRedirectUrl?: string;
  companyName?: string;
  deauthorizeCallbackMethod?: string;
  deauthorizeCallbackUrl?: string;
  description?: string;
  friendlyName?: string;
  homepageUrl?: string;
  permissions?: ConnectAppPermission[];
}

interface ConnectAppListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ConnectAppContext;
  /**
   * Streams ConnectAppInstance records from the API.
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
  each(opts?: ConnectAppListInstanceEachOptions, callback?: (item: ConnectAppInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a connect_app
   *
   * @param sid - Fetch by unique connect-app Sid
   */
  get(sid: string): ConnectAppContext;
  /**
   * Retrieve a single target page of ConnectAppInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ConnectAppPage) => any): Promise<ConnectAppPage>;
  /**
   * Lists ConnectAppInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ConnectAppListInstanceOptions, callback?: (error: Error | null, items: ConnectAppInstance[]) => any): Promise<ConnectAppInstance[]>;
  /**
   * Retrieve a single page of ConnectAppInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ConnectAppListInstancePageOptions, callback?: (error: Error | null, items: ConnectAppPage) => any): Promise<ConnectAppPage>;
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
interface ConnectAppListInstanceEachOptions {
  callback?: (item: ConnectAppInstance, done: (err?: Error) => void) => void;
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
interface ConnectAppListInstanceOptions {
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
interface ConnectAppListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface ConnectAppPayload extends ConnectAppResource, Page.TwilioResponsePayload {
}

interface ConnectAppResource {
  account_sid: string;
  authorize_redirect_url: string;
  company_name: string;
  deauthorize_callback_method: string;
  deauthorize_callback_url: string;
  description: string;
  friendly_name: string;
  homepage_url: string;
  permissions: ConnectAppPermission;
  sid: string;
  uri: string;
}

interface ConnectAppSolution {
  accountSid?: string;
}


declare class ConnectAppPage extends Page<V2010, ConnectAppPayload, ConnectAppResource, ConnectAppInstance> {
  /**
   * Initialize the ConnectAppPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: ConnectAppSolution);

  /**
   * Build an instance of ConnectAppInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ConnectAppPayload): ConnectAppInstance;
}


declare class ConnectAppInstance extends SerializableClass {
  /**
   * Initialize the ConnectAppContext
   *
   * @property accountSid - The unique sid that identifies this account
   * @property authorizeRedirectUrl - URIL Twilio sends requests when users authorize
   * @property companyName - The company name set for this Connect App.
   * @property deauthorizeCallbackMethod - HTTP method Twilio will use making requests to the url
   * @property deauthorizeCallbackUrl - URL Twilio will send a request when a user de-authorizes this app
   * @property description - A more detailed human readable description
   * @property friendlyName - A human readable name for the Connect App.
   * @property homepageUrl - The URL users can obtain more information
   * @property permissions - The set of permissions that your ConnectApp requests.
   * @property sid - A string that uniquely identifies this connect-apps
   * @property uri - The URI for this resource
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   * @param sid - Fetch by unique connect-app Sid
   */
  constructor(version: V2010, payload: ConnectAppPayload, accountSid: string, sid: string);

  private _proxy: ConnectAppContext;
  accountSid: string;
  authorizeRedirectUrl: string;
  companyName: string;
  deauthorizeCallbackMethod: string;
  deauthorizeCallbackUrl: string;
  description: string;
  /**
   * fetch a ConnectAppInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ConnectAppInstance) => any): void;
  friendlyName: string;
  homepageUrl: string;
  permissions: connect_app.permission;
  sid: string;
  /**
   * Produce a plain JSON object version of the ConnectAppInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  /**
   * update a ConnectAppInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ConnectAppInstanceUpdateOptions, callback?: (error: Error | null, items: ConnectAppInstance) => any): void;
  uri: string;
}


declare class ConnectAppContext {
  /**
   * Initialize the ConnectAppContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique connect-app Sid
   */
  constructor(version: V2010, accountSid: string, sid: string);

  /**
   * fetch a ConnectAppInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ConnectAppInstance) => any): void;
  /**
   * update a ConnectAppInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ConnectAppInstanceUpdateOptions, callback?: (error: Error | null, items: ConnectAppInstance) => any): void;
}

export { ConnectAppContext, ConnectAppInstance, ConnectAppList, ConnectAppListInstance, ConnectAppListInstanceEachOptions, ConnectAppListInstanceOptions, ConnectAppListInstancePageOptions, ConnectAppPage, ConnectAppPayload, ConnectAppResource, ConnectAppSolution }
