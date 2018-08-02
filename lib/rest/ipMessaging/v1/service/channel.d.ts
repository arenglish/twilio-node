/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import serialize = require('../../../../base/serialize');
import { InviteList } from './channel/invite';
import { MemberList } from './channel/member';
import { MessageList } from './channel/message';
import { SerializableClass } from '../../../../interfaces';

type ChannelChannelType = 'public'|'private';

/**
 * @description Initialize the ChannelList
 *
 * @param version - Version of the resource
 * @param serviceSid - The unique id of the [Service][service] this channel belongs to.
 */
declare function ChannelList(version: V1, serviceSid: string): ChannelListInstance;

/**
 * Options to pass to update
 *
 * @property attributes - An optional metadata field you can use to store any data you wish.
 * @property friendlyName - A human-readable name for the Channel.
 * @property uniqueName - A unique, addressable name for the Channel.
 */
interface ChannelInstanceUpdateOptions {
  attributes?: string;
  friendlyName?: string;
  uniqueName?: string;
}

interface ChannelListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ChannelContext;
  /**
   * create a ChannelInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: ChannelListInstanceCreateOptions, callback?: (error: Error | null, items: ChannelListInstance) => any): Promise<ChannelInstance>;
  /**
   * Streams ChannelInstance records from the API.
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
  each(opts?: ChannelListInstanceEachOptions, callback?: (item: ChannelInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a channel
   *
   * @param sid - The sid
   */
  get(sid: string): ChannelContext;
  /**
   * Retrieve a single target page of ChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ChannelPage) => any): Promise<ChannelPage>;
  /**
   * Lists ChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ChannelListInstanceOptions, callback?: (error: Error | null, items: ChannelInstance[]) => any): Promise<ChannelInstance[]>;
  /**
   * Retrieve a single page of ChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ChannelListInstancePageOptions, callback?: (error: Error | null, items: ChannelPage) => any): Promise<ChannelPage>;
}

/**
 * Options to pass to create
 *
 * @property attributes - An optional metadata field you can use to store any data you wish.
 * @property friendlyName - A human-readable name for the Channel.
 * @property type - The visibility of the channel - public or private.
 * @property uniqueName - A unique, addressable name for the Channel.
 */
interface ChannelListInstanceCreateOptions {
  attributes?: string;
  friendlyName?: string;
  type?: ChannelChannelType;
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
 * @property type - The type
 */
interface ChannelListInstanceEachOptions {
  callback?: (item: ChannelInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
  type?: ChannelChannelType[];
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
 * @property type - The type
 */
interface ChannelListInstanceOptions {
  limit?: number;
  pageSize?: number;
  type?: ChannelChannelType[];
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property type - The type
 */
interface ChannelListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  type?: ChannelChannelType[];
}

interface ChannelPayload extends ChannelResource, Page.TwilioResponsePayload {
}

interface ChannelResource {
  account_sid: string;
  attributes: string;
  created_by: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  links: string;
  members_count: number;
  messages_count: number;
  service_sid: string;
  sid: string;
  type: ChannelChannelType;
  unique_name: string;
  url: string;
}

interface ChannelSolution {
  serviceSid?: string;
}


declare class ChannelPage extends Page<V1, ChannelPayload, ChannelResource, ChannelInstance> {
  /**
   * Initialize the ChannelPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: ChannelSolution);

  /**
   * Build an instance of ChannelInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ChannelPayload): ChannelInstance;
}


declare class ChannelInstance extends SerializableClass {
  /**
   * Initialize the ChannelContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the [Account][/console] responsible for this channel.
   * @property serviceSid - The unique id of the [Service][service] this channel belongs to.
   * @property friendlyName - The human-readable name of this channel.
   * @property uniqueName - The unique, addressable name of this channel.
   * @property attributes - An optional string metadata field you can use to store any data you wish.
   * @property type - The visibility of this channel - either public or private
   * @property dateCreated - The date that this resource was created.
   * @property dateUpdated - The date that this resource was last updated.
   * @property createdBy - Identity of the channel's creator.
   * @property membersCount - The members_count
   * @property messagesCount - The messages_count
   * @property url - An absolute URL for this channel.
   * @property links - Absolute URLs to access the [Members][members] and [Messages][messages] for this channel.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The unique id of the [Service][service] this channel belongs to.
   * @param sid - The sid
   */
  constructor(version: V1, payload: ChannelPayload, serviceSid: string, sid: string);

  private _proxy: ChannelContext;
  accountSid: string;
  attributes: string;
  createdBy: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ChannelInstance) => any): void;
  friendlyName: string;
  /**
   * Access the invites
   */
  invites();
  links: string;
  /**
   * Access the members
   */
  members();
  membersCount: number;
  /**
   * Access the messages
   */
  messages();
  messagesCount: number;
  /**
   * remove a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ChannelInstance) => any): void;
  serviceSid: string;
  sid: string;
  /**
   * Produce a plain JSON object version of the ChannelInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  type: ChannelChannelType;
  uniqueName: string;
  /**
   * update a ChannelInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ChannelInstanceUpdateOptions, callback?: (error: Error | null, items: ChannelInstance) => any): void;
  url: string;
}


declare class ChannelContext {
  /**
   * Initialize the ChannelContext
   *
   * @property members - members resource
   * @property messages - messages resource
   * @property invites - invites resource
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: V1, serviceSid: string, sid: string);

  /**
   * fetch a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ChannelInstance) => any): void;
  invites?: Twilio.IpMessaging.V1.ServiceContext.ChannelContext.InviteList;
  members?: Twilio.IpMessaging.V1.ServiceContext.ChannelContext.MemberList;
  messages?: Twilio.IpMessaging.V1.ServiceContext.ChannelContext.MessageList;
  /**
   * remove a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ChannelInstance) => any): void;
  /**
   * update a ChannelInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ChannelInstanceUpdateOptions, callback?: (error: Error | null, items: ChannelInstance) => any): void;
}

export { ChannelContext, ChannelInstance, ChannelList, ChannelListInstance, ChannelListInstanceCreateOptions, ChannelListInstanceEachOptions, ChannelListInstanceOptions, ChannelListInstancePageOptions, ChannelPage, ChannelPayload, ChannelResource, ChannelSolution }
