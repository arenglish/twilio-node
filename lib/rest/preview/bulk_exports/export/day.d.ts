/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import BulkExports = require('../../BulkExports');
import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the DayList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param resourceType - The resource_type
 */
declare function DayList(version: BulkExports, resourceType: string): DayListInstance;

interface DayListInstance {
  /**
   * Streams DayInstance records from the API.
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
  each(opts?: DayListInstanceEachOptions, callback?: (item: DayInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of DayInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: DayPage) => any): Promise<DayPage>;
  /**
   * Lists DayInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: DayListInstanceOptions, callback?: (error: Error | null, items: DayInstance[]) => any): Promise<DayInstance[]>;
  /**
   * Retrieve a single page of DayInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: DayListInstancePageOptions, callback?: (error: Error | null, items: DayPage) => any): Promise<DayPage>;
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
interface DayListInstanceEachOptions {
  callback?: (item: DayInstance, done: (err?: Error) => void) => void;
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
interface DayListInstanceOptions {
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
interface DayListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface DayPayload extends DayResource, Page.TwilioResponsePayload {
}

interface DayResource {
  day?: string;
  redirect_to?: string;
  resource_type?: string;
  size?: number;
}

interface DaySolution {
  resourceType?: string;
}


declare class DayPage extends Page<BulkExports, DayPayload, DayResource, DayInstance> {
  /**
   * Initialize the DayPagePLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: BulkExports, response: Response<string>, solution: DaySolution);

  /**
   * Build an instance of DayInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: DayPayload): DayInstance;
}


declare class DayInstance extends SerializableClass {
  /**
   * Initialize the DayContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property redirectTo - The redirect_to
   * @property day - The day
   * @property size - The size
   * @property resourceType - The resource_type
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param resourceType - The resource_type
   */
  constructor(version: BulkExports, payload: DayPayload, resourceType: string);

  day: string;
  redirectTo: string;
  resourceType: string;
  size: number;
  /**
   * Produce a plain JSON object version of the DayInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
}

export { DayInstance, DayList, DayListInstance, DayListInstanceEachOptions, DayListInstanceOptions, DayListInstancePageOptions, DayPage, DayPayload, DayResource, DaySolution }
