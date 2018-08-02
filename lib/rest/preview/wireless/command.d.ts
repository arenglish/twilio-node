/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import Wireless = require('../Wireless');
import { SerializableClass } from '../../../interfaces';

/**
 * @description Initialize the CommandList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function CommandList(version: Wireless): CommandListInstance;

interface CommandListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): CommandContext;
  /**
   * create a CommandInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: CommandListInstanceCreateOptions, callback?: (error: Error | null, items: CommandListInstance) => any): Promise<CommandInstance>;
  /**
   * Streams CommandInstance records from the API.
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
  each(opts?: CommandListInstanceEachOptions, callback?: (item: CommandInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a command
   *
   * @param sid - The sid
   */
  get(sid: string): CommandContext;
  /**
   * Retrieve a single target page of CommandInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: CommandPage) => any): Promise<CommandPage>;
  /**
   * Lists CommandInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: CommandListInstanceOptions, callback?: (error: Error | null, items: CommandInstance[]) => any): Promise<CommandInstance[]>;
  /**
   * Retrieve a single page of CommandInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: CommandListInstancePageOptions, callback?: (error: Error | null, items: CommandPage) => any): Promise<CommandPage>;
}

/**
 * Options to pass to create
 *
 * @property callbackMethod - The callback_method
 * @property callbackUrl - The callback_url
 * @property command - The command
 * @property commandMode - The command_mode
 * @property device - The device
 * @property includeSid - The include_sid
 * @property sim - The sim
 */
interface CommandListInstanceCreateOptions {
  callbackMethod?: string;
  callbackUrl?: string;
  command: string;
  commandMode?: string;
  device?: string;
  includeSid?: string;
  sim?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property device - The device
 * @property direction - The direction
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
 * @property sim - The sim
 * @property status - The status
 */
interface CommandListInstanceEachOptions {
  callback?: (item: CommandInstance, done: (err?: Error) => void) => void;
  device?: string;
  direction?: string;
  done?: Function;
  limit?: number;
  pageSize?: number;
  sim?: string;
  status?: string;
}

/**
 * Options to pass to list
 *
 * @property device - The device
 * @property direction - The direction
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
 * @property sim - The sim
 * @property status - The status
 */
interface CommandListInstanceOptions {
  device?: string;
  direction?: string;
  limit?: number;
  pageSize?: number;
  sim?: string;
  status?: string;
}

/**
 * Options to pass to page
 *
 * @property device - The device
 * @property direction - The direction
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property sim - The sim
 * @property status - The status
 */
interface CommandListInstancePageOptions {
  device?: string;
  direction?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  sim?: string;
  status?: string;
}

interface CommandPayload extends CommandResource, Page.TwilioResponsePayload {
}

interface CommandResource {
  account_sid: string;
  command: string;
  command_mode: string;
  date_created: Date;
  date_updated: Date;
  device_sid: string;
  direction: string;
  sid: string;
  sim_sid: string;
  status: string;
  url: string;
}

interface CommandSolution {
}


declare class CommandPage extends Page<Wireless, CommandPayload, CommandResource, CommandInstance> {
  /**
   * Initialize the CommandPagePLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Wireless, response: Response<string>, solution: CommandSolution);

  /**
   * Build an instance of CommandInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CommandPayload): CommandInstance;
}


declare class CommandInstance extends SerializableClass {
  /**
   * Initialize the CommandContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - The sid
   * @property accountSid - The account_sid
   * @property deviceSid - The device_sid
   * @property simSid - The sim_sid
   * @property command - The command
   * @property commandMode - The command_mode
   * @property status - The status
   * @property direction - The direction
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Wireless, payload: CommandPayload, sid: string);

  private _proxy: CommandContext;
  accountSid: string;
  command: string;
  commandMode: string;
  dateCreated: Date;
  dateUpdated: Date;
  deviceSid: string;
  direction: string;
  /**
   * fetch a CommandInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CommandInstance) => any): void;
  sid: string;
  simSid: string;
  status: string;
  /**
   * Produce a plain JSON object version of the CommandInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  url: string;
}


declare class CommandContext {
  /**
   * Initialize the CommandContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Wireless, sid: string);

  /**
   * fetch a CommandInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CommandInstance) => any): void;
}

export { CommandContext, CommandInstance, CommandList, CommandListInstance, CommandListInstanceCreateOptions, CommandListInstanceEachOptions, CommandListInstanceOptions, CommandListInstancePageOptions, CommandPage, CommandPayload, CommandResource, CommandSolution }
