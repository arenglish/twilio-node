/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import Sync = require('../../Sync');
import { SerializableClass } from '../../../../interfaces';
import { SyncListItemList } from './syncList/syncListItem';
import { SyncListItemListInstance } from './syncList/syncListItem';
import { SyncListPermissionList } from './syncList/syncListPermission';
import { SyncListPermissionListInstance } from './syncList/syncListPermission';

/**
 * @description Initialize the SyncListList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param serviceSid - The service_sid
 */
declare function SyncListList(version: Sync, serviceSid: string): SyncListListInstance;

interface SyncListListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): SyncListContext;
  /**
   * create a SyncListInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: SyncListListInstanceCreateOptions, callback?: (error: Error | null, item: SyncListInstance) => any): Promise<SyncListInstance>;
  /**
   * Streams SyncListInstance records from the API.
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
  each(opts?: SyncListListInstanceEachOptions, callback?: (item: SyncListInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a sync_list
   *
   * @param sid - The sid
   */
  get(sid: string): SyncListContext;
  /**
   * Retrieve a single target page of SyncListInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SyncListPage) => any): Promise<SyncListPage>;
  /**
   * Lists SyncListInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: SyncListListInstanceOptions, callback?: (error: Error | null, items: SyncListInstance[]) => any): Promise<SyncListInstance[]>;
  /**
   * Retrieve a single page of SyncListInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: SyncListListInstancePageOptions, callback?: (error: Error | null, items: SyncListPage) => any): Promise<SyncListPage>;
}

/**
 * Options to pass to create
 *
 * @property uniqueName - The unique_name
 */
interface SyncListListInstanceCreateOptions {
  uniqueName?: string;
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
interface SyncListListInstanceEachOptions {
  callback?: (item: SyncListInstance, done: (err?: Error) => void) => void;
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
interface SyncListListInstanceOptions {
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
interface SyncListListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface SyncListPayload extends SyncListResource, Page.TwilioResponsePayload {
}

interface SyncListResource {
  account_sid: string;
  created_by: string;
  date_created: Date;
  date_updated: Date;
  links: string;
  revision: string;
  service_sid: string;
  sid: string;
  unique_name: string;
  url: string;
}

interface SyncListSolution {
  serviceSid?: string;
}


declare class SyncListContext {
  /**
   * Initialize the SyncListContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property syncListItems - syncListItems resource
   * @property syncListPermissions - syncListPermissions resource
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Sync, serviceSid: string, sid: string);

  /**
   * fetch a SyncListInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SyncListInstance) => any): Promise<SyncListInstance>;
  /**
   * remove a SyncListInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SyncListInstance) => any): void;
  syncListItems: SyncListItemListInstance;
  syncListPermissions: SyncListPermissionListInstance;
}


declare class SyncListInstance extends SerializableClass {
  /**
   * Initialize the SyncListContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - The sid
   * @property uniqueName - The unique_name
   * @property accountSid - The account_sid
   * @property serviceSid - The service_sid
   * @property url - The url
   * @property links - The links
   * @property revision - The revision
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property createdBy - The created_by
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Sync, payload: SyncListPayload, serviceSid: string, sid: string);

  private _proxy: SyncListContext;
  accountSid: string;
  createdBy: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a SyncListInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SyncListInstance) => any): void;
  links: string;
  /**
   * remove a SyncListInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SyncListInstance) => any): void;
  revision: string;
  serviceSid: string;
  sid: string;
  /**
   * Access the syncListItems
   */
  syncListItems(): SyncListItemListInstance;
  /**
   * Access the syncListPermissions
   */
  syncListPermissions(): SyncListPermissionListInstance;
  /**
   * Produce a plain JSON object version of the SyncListInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  uniqueName: string;
  url: string;
}


declare class SyncListPage extends Page<Sync, SyncListPayload, SyncListResource, SyncListInstance> {
  /**
   * Initialize the SyncListPagePLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Sync, response: Response<string>, solution: SyncListSolution);

  /**
   * Build an instance of SyncListInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SyncListPayload): SyncListInstance;
}

export { SyncListContext, SyncListInstance, SyncListList, SyncListListInstance, SyncListListInstanceCreateOptions, SyncListListInstanceEachOptions, SyncListListInstanceOptions, SyncListListInstancePageOptions, SyncListPage, SyncListPayload, SyncListResource, SyncListSolution }
