/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import { AssignedAddOnExtensionList } from './assignedAddOn/assignedAddOnExtension';
import { AssignedAddOnExtensionListInstance } from './assignedAddOn/assignedAddOnExtension';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the AssignedAddOnList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param accountSid - The Account id that has installed this Add-on
 * @param resourceSid - The Phone Number id that has installed this Add-on
 */
declare function AssignedAddOnList(version: V2010, accountSid: string, resourceSid: string): AssignedAddOnListInstance;

interface AssignedAddOnListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): AssignedAddOnContext;
  /**
   * create a AssignedAddOnInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: AssignedAddOnListInstanceCreateOptions, callback?: (error: Error | null, item: AssignedAddOnInstance) => any): Promise<AssignedAddOnInstance>;
  /**
   * Streams AssignedAddOnInstance records from the API.
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
  each(opts?: AssignedAddOnListInstanceEachOptions, callback?: (item: AssignedAddOnInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a assigned_add_on
   *
   * @param sid - The unique Installed Add-on Sid
   */
  get(sid: string): AssignedAddOnContext;
  /**
   * Retrieve a single target page of AssignedAddOnInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: AssignedAddOnPage) => any): Promise<AssignedAddOnPage>;
  /**
   * Lists AssignedAddOnInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: AssignedAddOnListInstanceOptions, callback?: (error: Error | null, items: AssignedAddOnInstance[]) => any): Promise<AssignedAddOnInstance[]>;
  /**
   * Retrieve a single page of AssignedAddOnInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: AssignedAddOnListInstancePageOptions, callback?: (error: Error | null, items: AssignedAddOnPage) => any): Promise<AssignedAddOnPage>;
}

/**
 * Options to pass to create
 *
 * @property installedAddOnSid - A string that uniquely identifies the Add-on installation
 */
interface AssignedAddOnListInstanceCreateOptions {
  installedAddOnSid: string;
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
interface AssignedAddOnListInstanceEachOptions {
  callback?: (item: AssignedAddOnInstance, done: (err?: Error) => void) => void;
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
interface AssignedAddOnListInstanceOptions {
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
interface AssignedAddOnListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface AssignedAddOnPayload extends AssignedAddOnResource, Page.TwilioResponsePayload {
}

interface AssignedAddOnResource {
  account_sid: string;
  configuration: string;
  date_created: Date;
  date_updated: Date;
  description: string;
  friendly_name: string;
  resource_sid: string;
  sid: string;
  subresource_uris: string;
  unique_name: string;
  uri: string;
}

interface AssignedAddOnSolution {
  accountSid?: string;
  resourceSid?: string;
}


declare class AssignedAddOnPage extends Page<V2010, AssignedAddOnPayload, AssignedAddOnResource, AssignedAddOnInstance> {
  /**
   * Initialize the AssignedAddOnPagePLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: AssignedAddOnSolution);

  /**
   * Build an instance of AssignedAddOnInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AssignedAddOnPayload): AssignedAddOnInstance;
}


declare class AssignedAddOnInstance extends SerializableClass {
  /**
   * Initialize the AssignedAddOnContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - A string that uniquely identifies this assigned Add-on installation
   * @property accountSid - The Account id that has installed this Add-on
   * @property resourceSid - The Phone Number id that has installed this Add-on
   * @property friendlyName - A description of this Add-on installation
   * @property description - A short description of the Add-on functionality
   * @property configuration - The JSON object representing the current configuration
   * @property uniqueName - The string that uniquely identifies this Add-on installation
   * @property dateCreated - The date this Add-on was installed
   * @property dateUpdated - The date this Add-on installation was last updated
   * @property uri - The uri
   * @property subresourceUris - The subresource_uris
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The Account id that has installed this Add-on
   * @param resourceSid - The Phone Number id that has installed this Add-on
   * @param sid - The unique Installed Add-on Sid
   */
  constructor(version: V2010, payload: AssignedAddOnPayload, accountSid: string, resourceSid: string, sid: string);

  private _proxy: AssignedAddOnContext;
  accountSid: string;
  configuration: string;
  dateCreated: Date;
  dateUpdated: Date;
  description: string;
  /**
   * Access the extensions
   */
  extensions(): AssignedAddOnExtensionListInstance;
  /**
   * fetch a AssignedAddOnInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AssignedAddOnInstance) => any): void;
  friendlyName: string;
  /**
   * remove a AssignedAddOnInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: AssignedAddOnInstance) => any): void;
  resourceSid: string;
  sid: string;
  subresourceUris: string;
  /**
   * Produce a plain JSON object version of the AssignedAddOnInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  uniqueName: string;
  uri: string;
}


declare class AssignedAddOnContext {
  /**
   * Initialize the AssignedAddOnContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property extensions - extensions resource
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param resourceSid - The resource_sid
   * @param sid - The unique Installed Add-on Sid
   */
  constructor(version: V2010, accountSid: string, resourceSid: string, sid: string);

  extensions?: AssignedAddOnExtensionListInstance;
  /**
   * fetch a AssignedAddOnInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AssignedAddOnInstance) => any): void;
  /**
   * remove a AssignedAddOnInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: AssignedAddOnInstance) => any): void;
}

export { AssignedAddOnContext, AssignedAddOnInstance, AssignedAddOnList, AssignedAddOnListInstance, AssignedAddOnListInstanceCreateOptions, AssignedAddOnListInstanceEachOptions, AssignedAddOnListInstanceOptions, AssignedAddOnListInstancePageOptions, AssignedAddOnPage, AssignedAddOnPayload, AssignedAddOnResource, AssignedAddOnSolution }
