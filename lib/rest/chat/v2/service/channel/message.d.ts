/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2 = require('../../../V2');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

type MessageOrderType = 'asc'|'desc';

type MessageWebhookEnabledType = 'true'|'false';

/**
 * @description Initialize the MessageList
 *
 * @param version - Version of the resource
 * @param serviceSid - The unique id of the Service this message belongs to.
 * @param channelSid - The channel_sid
 */
declare function MessageList(version: V2, serviceSid: string, channelSid: string): MessageListInstance;

/**
 * Options to pass to update
 *
 * @property attributes - The attributes metadata field you can use to store any data you wish.
 * @property body - The message body string.
 * @property dateCreated - The ISO8601 time specifying the datetime the Message should be set as being created.
 * @property dateUpdated - The ISO8601 time specifying the datetime the Message should be set as having been last updated.
 * @property from - The identity of the message's author.
 * @property lastUpdatedBy - Specify the Identity of the User that last updated the Message
 */
interface MessageInstanceUpdateOptions {
  attributes?: string;
  body?: string;
  dateCreated?: Date;
  dateUpdated?: Date;
  from?: string;
  lastUpdatedBy?: string;
}

interface MessageListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): MessageContext;
  /**
   * create a MessageInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: MessageListInstanceCreateOptions, callback?: (error: Error | null, items: MessageListInstance) => any): Promise<MessageInstance>;
  /**
   * Streams MessageInstance records from the API.
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
  each(opts?: MessageListInstanceEachOptions, callback?: (item: MessageInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a message
   *
   * @param sid - Key that uniquely defines the message to fetch.
   */
  get(sid: string): MessageContext;
  /**
   * Retrieve a single target page of MessageInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: MessagePage) => any): Promise<MessagePage>;
  /**
   * Lists MessageInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: MessageListInstanceOptions, callback?: (error: Error | null, items: MessageInstance[]) => any): Promise<MessageInstance[]>;
  /**
   * Retrieve a single page of MessageInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: MessageListInstancePageOptions, callback?: (error: Error | null, items: MessagePage) => any): Promise<MessagePage>;
}

/**
 * Options to pass to create
 *
 * @property attributes - The attributes metadata field you can use to store any data you wish.
 * @property body - The message body string.
 * @property dateCreated - The ISO8601 time specifying the datetime the Message should be set as being created.
 * @property dateUpdated - The ISO8601 time specifying the datetime the Message should be set as having been last updated.
 * @property from - The identity of the message's author. Defaults to system if not specified.
 * @property lastUpdatedBy - Specify the Identity of the User that last updated the Message
 * @property mediaSid -  The Media Sid to be attached to this Message.
 */
interface MessageListInstanceCreateOptions {
  attributes?: string;
  body?: string;
  dateCreated?: Date;
  dateUpdated?: Date;
  from?: string;
  lastUpdatedBy?: string;
  mediaSid?: string;
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
 * @property order - Specifies sorting order for messages list, possible values are: `asc` or `desc`.
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface MessageListInstanceEachOptions {
  callback?: (item: MessageInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  order?: MessageOrderType;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property order - Specifies sorting order for messages list, possible values are: `asc` or `desc`.
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface MessageListInstanceOptions {
  limit?: number;
  order?: MessageOrderType;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property order - Specifies sorting order for messages list, possible values are: `asc` or `desc`.
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface MessageListInstancePageOptions {
  order?: MessageOrderType;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface MessagePayload extends MessageResource, Page.TwilioResponsePayload {
}

interface MessageResource {
  account_sid: string;
  attributes: string;
  body: string;
  channel_sid: string;
  date_created: Date;
  date_updated: Date;
  from: string;
  index: number;
  last_updated_by: string;
  media: string;
  service_sid: string;
  sid: string;
  to: string;
  type: string;
  url: string;
  was_edited: boolean;
}

interface MessageSolution {
  channelSid?: string;
  serviceSid?: string;
}


declare class MessagePage extends Page<V2, MessagePayload, MessageResource, MessageInstance> {
  /**
   * Initialize the MessagePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: MessageSolution);

  /**
   * Build an instance of MessageInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MessagePayload): MessageInstance;
}


declare class MessageInstance extends SerializableClass {
  /**
   * Initialize the MessageContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account responsible for this message.
   * @property attributes - A string metadata field you can use to store any data you wish.
   * @property serviceSid - The unique id of the Service this message belongs to.
   * @property to - The unique id of the Channel this message was sent to.
   * @property channelSid - The channel_sid
   * @property dateCreated - The date that this resource was created.
   * @property dateUpdated - The date that this resource was last updated.
   * @property lastUpdatedBy - Field to specify the Identity of the User that last updated the Message
   * @property wasEdited - true if the message has been updated since it was created.
   * @property from - The identity of the message's author.
   * @property body - The contents of the message.
   * @property index - The index of the message within the Channel
   * @property type - Message type.
   * @property media - If a Media resource instance is attached to the Message, this will contain the Media object for the attached Media.
   * @property url - An absolute URL for this message.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The unique id of the Service this message belongs to.
   * @param channelSid - The channel_sid
   * @param sid - Key that uniquely defines the message to fetch.
   */
  constructor(version: V2, payload: MessagePayload, serviceSid: string, channelSid: string, sid: string);

  private _proxy: MessageContext;
  accountSid: string;
  attributes: string;
  body: string;
  channelSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a MessageInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: MessageInstance) => any): void;
  from: string;
  index: number;
  lastUpdatedBy: string;
  media: string;
  /**
   * remove a MessageInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: MessageInstance) => any): void;
  serviceSid: string;
  sid: string;
  to: string;
  /**
   * Produce a plain JSON object version of the MessageInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  type: string;
  /**
   * update a MessageInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: MessageInstanceUpdateOptions, callback?: (error: Error | null, items: MessageInstance) => any): void;
  url: string;
  wasEdited: boolean;
}


declare class MessageContext {
  /**
   * Initialize the MessageContext
   *
   * @param version - Version of the resource
   * @param serviceSid - Sid of the Service this message belongs to.
   * @param channelSid - Key that uniquely defines the channel this message belongs to.
   * @param sid - Key that uniquely defines the message to fetch.
   */
  constructor(version: V2, serviceSid: string, channelSid: string, sid: string);

  /**
   * fetch a MessageInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: MessageInstance) => any): void;
  /**
   * remove a MessageInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: MessageInstance) => any): void;
  /**
   * update a MessageInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: MessageInstanceUpdateOptions, callback?: (error: Error | null, items: MessageInstance) => any): void;
}

export { MessageContext, MessageInstance, MessageList, MessageListInstance, MessageListInstanceCreateOptions, MessageListInstanceEachOptions, MessageListInstanceOptions, MessageListInstancePageOptions, MessagePage, MessagePayload, MessageResource, MessageSolution }
