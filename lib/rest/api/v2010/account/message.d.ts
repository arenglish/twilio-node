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
import { FeedbackList } from './message/feedback';
import { MediaList } from './message/media';
import { SerializableClass } from '../../../../interfaces';

type MessageAddressRetention = 'retain'|'discard';

type MessageContentRetention = 'retain'|'discard';

type MessageDirection = 'inbound'|'outbound-api'|'outbound-call'|'outbound-reply';

type MessageStatus = 'queued'|'sending'|'sent'|'failed'|'delivered'|'undelivered'|'receiving'|'received'|'accepted';

/**
 * @description Initialize the MessageList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique sid that identifies this account
 */
declare function MessageList(version: V2010, accountSid: string): MessageListInstance;

/**
 * Options to pass to update
 *
 * @property body - The text of the message you want to send, limited to 1600 characters.
 */
interface MessageInstanceUpdateOptions {
  body: string;
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
  create(opts: MessageListInstanceCreateOptions, callback?: (error: Error | null, items: MessageListInstance) => any): Promise<MessageInstance>;
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
   * @param sid - Fetch by unique message Sid
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
 * @property addressRetention - The address_retention
 * @property applicationSid - The application to use for callbacks
 * @property body - The text of the message you want to send, limited to 1600 characters.
 * @property contentRetention - The content_retention
 * @property forceDelivery - The force_delivery
 * @property from - The phone number that initiated the message
 * @property maxPrice - The total maximum price up to the fourth decimal in US dollars acceptable for the message to be delivered.
 * @property maxRate - The max_rate
 * @property mediaUrl - The URL of the media you wish to send out with the message.
 * @property messagingServiceSid - The 34 character unique id of the Messaging Service you want to associate with this Message.
 * @property provideFeedback - Set this value to true if you are sending messages that have a trackable user action and you intend to confirm delivery of the message using the Message Feedback API.
 * @property providerSid - The provider_sid
 * @property smartEncoded - The smart_encoded
 * @property statusCallback - URL Twilio will request when the status changes
 * @property to - The phone number to receive the message
 * @property validityPeriod - The number of seconds that the message can remain in a Twilio queue.
 */
interface MessageListInstanceCreateOptions {
  addressRetention?: MessageAddressRetention;
  applicationSid?: string;
  body?: string;
  contentRetention?: MessageContentRetention;
  forceDelivery?: boolean;
  from?: string;
  maxPrice?: number;
  maxRate?: string;
  mediaUrl?: string[];
  messagingServiceSid?: string;
  provideFeedback?: boolean;
  providerSid?: string;
  smartEncoded?: boolean;
  statusCallback?: string;
  to: string;
  validityPeriod?: number;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property dateSent - Filter by date sent
 * @property dateSentAfter - Filter by date sent
 * @property dateSentBefore - Filter by date sent
 * @property done - Function to be called upon completion of streaming
 * @property from - Filter by from number
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
 * @property to - Filter by messages to this number
 */
interface MessageListInstanceEachOptions {
  callback?: (item: MessageInstance, done: (err?: Error) => void) => void;
  dateSent?: Date;
  dateSentAfter?: Date;
  dateSentBefore?: Date;
  done?: Function;
  from?: string;
  limit?: number;
  pageSize?: number;
  to?: string;
}

/**
 * Options to pass to list
 *
 * @property dateSent - Filter by date sent
 * @property dateSentAfter - Filter by date sent
 * @property dateSentBefore - Filter by date sent
 * @property from - Filter by from number
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
 * @property to - Filter by messages to this number
 */
interface MessageListInstanceOptions {
  dateSent?: Date;
  dateSentAfter?: Date;
  dateSentBefore?: Date;
  from?: string;
  limit?: number;
  pageSize?: number;
  to?: string;
}

/**
 * Options to pass to page
 *
 * @property dateSent - Filter by date sent
 * @property dateSentAfter - Filter by date sent
 * @property dateSentBefore - Filter by date sent
 * @property from - Filter by from number
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property to - Filter by messages to this number
 */
interface MessageListInstancePageOptions {
  dateSent?: Date;
  dateSentAfter?: Date;
  dateSentBefore?: Date;
  from?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  to?: string;
}

interface MessagePayload extends MessageResource, Page.TwilioResponsePayload {
}

interface MessageResource {
  account_sid: string;
  api_version: string;
  body: string;
  date_created: Date;
  date_sent: Date;
  date_updated: Date;
  direction: MessageDirection;
  error_code: number;
  error_message: string;
  from: string;
  messaging_service_sid: string;
  num_media: string;
  num_segments: string;
  price: number;
  price_unit: string;
  sid: string;
  status: MessageStatus;
  subresource_uris: string;
  to: string;
  uri: string;
}

interface MessageSolution {
  accountSid?: string;
}


declare class MessagePage extends Page<V2010, MessagePayload, MessageResource, MessageInstance> {
  /**
   * Initialize the MessagePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: MessageSolution);

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
   * @property accountSid - The unique sid that identifies this account
   * @property apiVersion - The version of the Twilio API used to process the message.
   * @property body - The text body of the message. Up to 1600 characters long.
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property dateSent - The date the message was sent
   * @property direction - The direction of the message
   * @property errorCode - The error code associated with the message
   * @property errorMessage - Human readable description of the ErrorCode
   * @property from - The phone number that initiated the message
   * @property messagingServiceSid - The unique id of the Messaging Service used with the message.
   * @property numMedia - Number of media files associated with the message
   * @property numSegments - Indicates number of messages used to delivery the body
   * @property price - The amount billed for the message
   * @property priceUnit - The currency in which Price is measured
   * @property sid - A string that uniquely identifies this message
   * @property status - The status of this message
   * @property subresourceUris - The URI for any subresources
   * @property to - The phone number that received the message
   * @property uri - The URI for this resource
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   * @param sid - Fetch by unique message Sid
   */
  constructor(version: V2010, payload: MessagePayload, accountSid: string, sid: string);

  private _proxy: MessageContext;
  accountSid: string;
  apiVersion: string;
  body: string;
  dateCreated: Date;
  dateSent: Date;
  dateUpdated: Date;
  direction: message.direction;
  errorCode: number;
  errorMessage: string;
  /**
   * Access the feedback
   */
  feedback();
  /**
   * fetch a MessageInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: MessageInstance) => any): void;
  from: string;
  /**
   * Access the media
   */
  media();
  messagingServiceSid: string;
  numMedia: string;
  numSegments: string;
  price: number;
  priceUnit: string;
  /**
   * remove a MessageInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: MessageInstance) => any): void;
  sid: string;
  status: message.status;
  subresourceUris: string;
  to: string;
  /**
   * Produce a plain JSON object version of the MessageInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  /**
   * update a MessageInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: MessageInstanceUpdateOptions, callback?: (error: Error | null, items: MessageInstance) => any): void;
  uri: string;
}


declare class MessageContext {
  /**
   * Initialize the MessageContext
   *
   * @property media - media resource
   * @property feedback - feedback resource
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique message Sid
   */
  constructor(version: V2010, accountSid: string, sid: string);

  feedback?: Twilio.Api.V2010.AccountContext.MessageContext.FeedbackList;
  /**
   * fetch a MessageInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: MessageInstance) => any): void;
  media?: Twilio.Api.V2010.AccountContext.MessageContext.MediaList;
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
  update(opts: MessageInstanceUpdateOptions, callback?: (error: Error | null, items: MessageInstance) => any): void;
}

export { MessageContext, MessageInstance, MessageList, MessageListInstance, MessageListInstanceCreateOptions, MessageListInstanceEachOptions, MessageListInstanceOptions, MessageListInstancePageOptions, MessagePage, MessagePayload, MessageResource, MessageSolution }
