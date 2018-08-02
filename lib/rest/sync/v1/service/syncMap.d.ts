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
import { SyncMapItemList } from './syncMap/syncMapItem';
import { SyncMapPermissionList } from './syncMap/syncMapPermission';

/**
 * @description Initialize the SyncMapList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - The unique SID identifier of the Service Instance that hosts this Map object.
 */
declare function SyncMapList(version: V1, serviceSid: string): SyncMapListInstance;

/**
 * Options to pass to update
 *
 * @property ttl - New time-to-live of this Map in seconds.
 */
interface SyncMapInstanceUpdateOptions {
  ttl?: number;
}

interface SyncMapListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): SyncMapContext;
  /**
   * create a SyncMapInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: SyncMapListInstanceCreateOptions, callback?: (error: Error | null, items: SyncMapListInstance) => any): Promise<SyncMapInstance>;
  /**
   * Streams SyncMapInstance records from the API.
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
  each(opts?: SyncMapListInstanceEachOptions, callback?: (item: SyncMapInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a sync_map
   *
   * @param sid - The sid
   */
  get(sid: string): SyncMapContext;
  /**
   * Retrieve a single target page of SyncMapInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SyncMapPage) => any): Promise<SyncMapPage>;
  /**
   * Lists SyncMapInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: SyncMapListInstanceOptions, callback?: (error: Error | null, items: SyncMapInstance[]) => any): Promise<SyncMapInstance[]>;
  /**
   * Retrieve a single page of SyncMapInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: SyncMapListInstancePageOptions, callback?: (error: Error | null, items: SyncMapPage) => any): Promise<SyncMapPage>;
}

/**
 * Options to pass to create
 *
 * @property ttl - Time-to-live of this Map in seconds, defaults to no expiration.
 * @property uniqueName - Human-readable name for this map
 */
interface SyncMapListInstanceCreateOptions {
  ttl?: number;
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
interface SyncMapListInstanceEachOptions {
  callback?: (item: SyncMapInstance, done: (err?: Error) => void) => void;
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
interface SyncMapListInstanceOptions {
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
interface SyncMapListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface SyncMapPayload extends SyncMapResource, Page.TwilioResponsePayload {
}

interface SyncMapResource {
  account_sid: string;
  created_by: string;
  date_created: Date;
  date_expires: Date;
  date_updated: Date;
  links: string;
  revision: string;
  service_sid: string;
  sid: string;
  unique_name: string;
  url: string;
}

interface SyncMapSolution {
  serviceSid?: string;
}


declare class SyncMapPage extends Page<V1, SyncMapPayload, SyncMapResource, SyncMapInstance> {
  /**
   * Initialize the SyncMapPagePLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: SyncMapSolution);

  /**
   * Build an instance of SyncMapInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SyncMapPayload): SyncMapInstance;
}


declare class SyncMapInstance extends SerializableClass {
  /**
   * Initialize the SyncMapContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - The unique 34-character SID identifier of the Map.
   * @property uniqueName - The unique and addressable name of this Map.
   * @property accountSid - The unique SID identifier of the Twilio Account.
   * @property serviceSid - The unique SID identifier of the Service Instance that hosts this Map object.
   * @property url - The absolute URL for this Map.
   * @property links - A dictionary of URL links to nested resources of this Map.
   * @property revision - Contains the current revision of this Map, represented by a string identifier.
   * @property dateExpires - Contains the date this Map expires and gets deleted automatically.
   * @property dateCreated - The date this Map was created, given in UTC ISO 8601 format.
   * @property dateUpdated - Specifies the date this Map was last updated, given in UTC ISO 8601 format.
   * @property createdBy - The identity of the Map creator.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The unique SID identifier of the Service Instance that hosts this Map object.
   * @param sid - The sid
   */
  constructor(version: V1, payload: SyncMapPayload, serviceSid: string, sid: string);

  private _proxy: SyncMapContext;
  accountSid: string;
  createdBy: string;
  dateCreated: Date;
  dateExpires: Date;
  dateUpdated: Date;
  /**
   * fetch a SyncMapInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SyncMapInstance) => any): void;
  links: string;
  /**
   * remove a SyncMapInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SyncMapInstance) => any): void;
  revision: string;
  serviceSid: string;
  sid: string;
  /**
   * Access the syncMapItems
   */
  syncMapItems();
  /**
   * Access the syncMapPermissions
   */
  syncMapPermissions();
  /**
   * Produce a plain JSON object version of the SyncMapInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  uniqueName: string;
  /**
   * update a SyncMapInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SyncMapInstanceUpdateOptions, callback?: (error: Error | null, items: SyncMapInstance) => any): void;
  url: string;
}


declare class SyncMapContext {
  /**
   * Initialize the SyncMapContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property syncMapItems - syncMapItems resource
   * @property syncMapPermissions - syncMapPermissions resource
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: V1, serviceSid: string, sid: string);

  /**
   * fetch a SyncMapInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SyncMapInstance) => any): void;
  /**
   * remove a SyncMapInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SyncMapInstance) => any): void;
  syncMapItems?: Twilio.Sync.V1.ServiceContext.SyncMapContext.SyncMapItemList;
  syncMapPermissions?: Twilio.Sync.V1.ServiceContext.SyncMapContext.SyncMapPermissionList;
  /**
   * update a SyncMapInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SyncMapInstanceUpdateOptions, callback?: (error: Error | null, items: SyncMapInstance) => any): void;
}

export { SyncMapContext, SyncMapInstance, SyncMapList, SyncMapListInstance, SyncMapListInstanceCreateOptions, SyncMapListInstanceEachOptions, SyncMapListInstanceOptions, SyncMapListInstancePageOptions, SyncMapPage, SyncMapPayload, SyncMapResource, SyncMapSolution }
