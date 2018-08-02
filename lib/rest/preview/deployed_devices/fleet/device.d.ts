/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import DeployedDevices = require('../../DeployedDevices');
import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import serialize = require('../../../../base/serialize');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the DeviceList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param fleetSid - The unique identifier of the Fleet.
 */
declare function DeviceList(version: DeployedDevices, fleetSid: string): DeviceListInstance;

/**
 * Options to pass to update
 *
 * @property deploymentSid - The unique SID of the Deployment group.
 * @property enabled - The enabled
 * @property friendlyName - A human readable description for this Device.
 * @property identity - An identifier of the Device user.
 */
interface DeviceInstanceUpdateOptions {
  deploymentSid?: string;
  enabled?: boolean;
  friendlyName?: string;
  identity?: string;
}

interface DeviceListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): DeviceContext;
  /**
   * create a DeviceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: DeviceListInstanceCreateOptions, callback?: (error: Error | null, items: DeviceListInstance) => any): Promise<DeviceInstance>;
  /**
   * Streams DeviceInstance records from the API.
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
  each(opts?: DeviceListInstanceEachOptions, callback?: (item: DeviceInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a device
   *
   * @param sid - A string that uniquely identifies the Device.
   */
  get(sid: string): DeviceContext;
  /**
   * Retrieve a single target page of DeviceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: DevicePage) => any): Promise<DevicePage>;
  /**
   * Lists DeviceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: DeviceListInstanceOptions, callback?: (error: Error | null, items: DeviceInstance[]) => any): Promise<DeviceInstance[]>;
  /**
   * Retrieve a single page of DeviceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: DeviceListInstancePageOptions, callback?: (error: Error | null, items: DevicePage) => any): Promise<DevicePage>;
}

/**
 * Options to pass to create
 *
 * @property deploymentSid - The unique SID of the Deployment group.
 * @property enabled - The enabled
 * @property friendlyName - A human readable description for this Device.
 * @property identity - An identifier of the Device user.
 * @property uniqueName - A unique, addressable name of this Device.
 */
interface DeviceListInstanceCreateOptions {
  deploymentSid?: string;
  enabled?: boolean;
  friendlyName?: string;
  identity?: string;
  uniqueName?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property deploymentSid - Find all Devices grouped under the specified Deployment.
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
interface DeviceListInstanceEachOptions {
  callback?: (item: DeviceInstance, done: (err?: Error) => void) => void;
  deploymentSid?: string;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property deploymentSid - Find all Devices grouped under the specified Deployment.
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
interface DeviceListInstanceOptions {
  deploymentSid?: string;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property deploymentSid - Find all Devices grouped under the specified Deployment.
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface DeviceListInstancePageOptions {
  deploymentSid?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface DevicePayload extends DeviceResource, Page.TwilioResponsePayload {
}

interface DeviceResource {
  account_sid: string;
  date_authenticated: Date;
  date_created: Date;
  date_updated: Date;
  deployment_sid: string;
  enabled: boolean;
  fleet_sid: string;
  friendly_name: string;
  identity: string;
  sid: string;
  unique_name: string;
  url: string;
}

interface DeviceSolution {
  fleetSid?: string;
}


declare class DevicePage extends Page<DeployedDevices, DevicePayload, DeviceResource, DeviceInstance> {
  /**
   * Initialize the DevicePagePLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: DeployedDevices, response: Response<string>, solution: DeviceSolution);

  /**
   * Build an instance of DeviceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: DevicePayload): DeviceInstance;
}


declare class DeviceInstance extends SerializableClass {
  /**
   * Initialize the DeviceContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this Device.
   * @property url - URL of this Device.
   * @property uniqueName - A unique, addressable name of this Device.
   * @property friendlyName - A human readable description for this Device
   * @property fleetSid - The unique identifier of the Fleet.
   * @property enabled - Device enabled flag.
   * @property accountSid - The unique SID that identifies this Account.
   * @property identity - An identifier of the Device user.
   * @property deploymentSid - The unique SID of the Deployment group.
   * @property dateCreated - The date this Device was created.
   * @property dateUpdated - The date this Device was updated.
   * @property dateAuthenticated - The date this Device was authenticated.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param fleetSid - The unique identifier of the Fleet.
   * @param sid - A string that uniquely identifies the Device.
   */
  constructor(version: DeployedDevices, payload: DevicePayload, fleetSid: string, sid: string);

  private _proxy: DeviceContext;
  accountSid: string;
  dateAuthenticated: Date;
  dateCreated: Date;
  dateUpdated: Date;
  deploymentSid: string;
  enabled: boolean;
  /**
   * fetch a DeviceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: DeviceInstance) => any): void;
  fleetSid: string;
  friendlyName: string;
  identity: string;
  /**
   * remove a DeviceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: DeviceInstance) => any): void;
  sid: string;
  /**
   * Produce a plain JSON object version of the DeviceInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  uniqueName: string;
  /**
   * update a DeviceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: DeviceInstanceUpdateOptions, callback?: (error: Error | null, items: DeviceInstance) => any): void;
  url: string;
}


declare class DeviceContext {
  /**
   * Initialize the DeviceContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param fleetSid - The fleet_sid
   * @param sid - A string that uniquely identifies the Device.
   */
  constructor(version: DeployedDevices, fleetSid: string, sid: string);

  /**
   * fetch a DeviceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: DeviceInstance) => any): void;
  /**
   * remove a DeviceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: DeviceInstance) => any): void;
  /**
   * update a DeviceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: DeviceInstanceUpdateOptions, callback?: (error: Error | null, items: DeviceInstance) => any): void;
}

export { DeviceContext, DeviceInstance, DeviceList, DeviceListInstance, DeviceListInstanceCreateOptions, DeviceListInstanceEachOptions, DeviceListInstanceOptions, DeviceListInstancePageOptions, DevicePage, DevicePayload, DeviceResource, DeviceSolution }
