/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import serialize = require('../../../base/serialize');
import { ChannelList } from './service/channel';
import { ChannelListInstance } from './service/channel';
import { RoleList } from './service/role';
import { RoleListInstance } from './service/role';
import { SerializableClass } from '../../../interfaces';
import { UserList } from './service/user';
import { UserListInstance } from './service/user';

/**
 * @description Initialize the ServiceList
 *
 * @param version - Version of the resource
 */
declare function ServiceList(version: V1): ServiceListInstance;

/**
 * Options to pass to update
 *
 * @property consumptionReportInterval - ISO 8601 duration indicating the interval between consumption reports sent from client endpoints.
 * @property defaultChannelCreatorRoleSid - Channel role assigned to creator of channel when joining for first time
 * @property defaultChannelRoleSid - Channel role assigned on channel join
 * @property defaultServiceRoleSid - The default_service_role_sid
 * @property friendlyName - Human-readable name for this service instance
 * @property limits.channelMembers - The limits.channel_members
 * @property limits.userChannels - The limits.user_channels
 * @property notifications.addedToChannel.enabled - The notifications.added_to_channel.enabled
 * @property notifications.addedToChannel.template - The notifications.added_to_channel.template
 * @property notifications.invitedToChannel.enabled - The notifications.invited_to_channel.enabled
 * @property notifications.invitedToChannel.template - The notifications.invited_to_channel.template
 * @property notifications.newMessage.enabled - The notifications.new_message.enabled
 * @property notifications.newMessage.template - The notifications.new_message.template
 * @property notifications.removedFromChannel.enabled - The notifications.removed_from_channel.enabled
 * @property notifications.removedFromChannel.template - The notifications.removed_from_channel.template
 * @property postWebhookUrl - The webhook URL for POST-Event webhooks.
 * @property preWebhookUrl - The webhook URL for PRE-Event webhooks.
 * @property reachabilityEnabled - true if the reachability feature should be enabled.
 * @property readStatusEnabled - true if the member read status feature is enabled, false if not.
 * @property typingIndicatorTimeout - ISO 8601 duration indicating the timeout after "started typing" event when client should assume that user is not typing anymore even if no "ended typing" message received
 * @property webhookFilters - The list of WebHook events that are enabled for this Service instance.
 * @property webhookMethod - The webhook request format to use.
 * @property webhooks.onChannelAdd.format - The webhooks.on_channel_add.format
 * @property webhooks.onChannelAdd.method - The webhooks.on_channel_add.method
 * @property webhooks.onChannelAdd.url - The webhooks.on_channel_add.url
 * @property webhooks.onChannelAdded.format - The webhooks.on_channel_added.format
 * @property webhooks.onChannelAdded.method - The webhooks.on_channel_added.method
 * @property webhooks.onChannelAdded.url - The webhooks.on_channel_added.url
 * @property webhooks.onChannelDestroy.format - The webhooks.on_channel_destroy.format
 * @property webhooks.onChannelDestroy.method - The webhooks.on_channel_destroy.method
 * @property webhooks.onChannelDestroy.url - The webhooks.on_channel_destroy.url
 * @property webhooks.onChannelDestroyed.format - The webhooks.on_channel_destroyed.format
 * @property webhooks.onChannelDestroyed.method - The webhooks.on_channel_destroyed.method
 * @property webhooks.onChannelDestroyed.url - The webhooks.on_channel_destroyed.url
 * @property webhooks.onChannelUpdate.format - The webhooks.on_channel_update.format
 * @property webhooks.onChannelUpdate.method - The webhooks.on_channel_update.method
 * @property webhooks.onChannelUpdate.url - The webhooks.on_channel_update.url
 * @property webhooks.onChannelUpdated.format - The webhooks.on_channel_updated.format
 * @property webhooks.onChannelUpdated.method - The webhooks.on_channel_updated.method
 * @property webhooks.onChannelUpdated.url - The webhooks.on_channel_updated.url
 * @property webhooks.onMemberAdd.format - The webhooks.on_member_add.format
 * @property webhooks.onMemberAdd.method - The webhooks.on_member_add.method
 * @property webhooks.onMemberAdd.url - The webhooks.on_member_add.url
 * @property webhooks.onMemberAdded.format - The webhooks.on_member_added.format
 * @property webhooks.onMemberAdded.method - The webhooks.on_member_added.method
 * @property webhooks.onMemberAdded.url - The webhooks.on_member_added.url
 * @property webhooks.onMemberRemove.format - The webhooks.on_member_remove.format
 * @property webhooks.onMemberRemove.method - The webhooks.on_member_remove.method
 * @property webhooks.onMemberRemove.url - The webhooks.on_member_remove.url
 * @property webhooks.onMemberRemoved.format - The webhooks.on_member_removed.format
 * @property webhooks.onMemberRemoved.method - The webhooks.on_member_removed.method
 * @property webhooks.onMemberRemoved.url - The webhooks.on_member_removed.url
 * @property webhooks.onMessageRemove.format - The webhooks.on_message_remove.format
 * @property webhooks.onMessageRemove.method - The webhooks.on_message_remove.method
 * @property webhooks.onMessageRemove.url - The webhooks.on_message_remove.url
 * @property webhooks.onMessageRemoved.format - The webhooks.on_message_removed.format
 * @property webhooks.onMessageRemoved.method - The webhooks.on_message_removed.method
 * @property webhooks.onMessageRemoved.url - The webhooks.on_message_removed.url
 * @property webhooks.onMessageSend.format - The webhooks.on_message_send.format
 * @property webhooks.onMessageSend.method - The webhooks.on_message_send.method
 * @property webhooks.onMessageSend.url - The webhooks.on_message_send.url
 * @property webhooks.onMessageSent.format - The webhooks.on_message_sent.format
 * @property webhooks.onMessageSent.method - The webhooks.on_message_sent.method
 * @property webhooks.onMessageSent.url - The webhooks.on_message_sent.url
 * @property webhooks.onMessageUpdate.format - The webhooks.on_message_update.format
 * @property webhooks.onMessageUpdate.method - The webhooks.on_message_update.method
 * @property webhooks.onMessageUpdate.url - The webhooks.on_message_update.url
 * @property webhooks.onMessageUpdated.format - The webhooks.on_message_updated.format
 * @property webhooks.onMessageUpdated.method - The webhooks.on_message_updated.method
 * @property webhooks.onMessageUpdated.url - The webhooks.on_message_updated.url
 */
interface ServiceInstanceUpdateOptions {
  consumptionReportInterval?: number;
  defaultChannelCreatorRoleSid?: string;
  defaultChannelRoleSid?: string;
  defaultServiceRoleSid?: string;
  friendlyName?: string;
  limits?: {
    channelMembers?: number;
    userChannels?: number;
  };
  notifications?: {
    newMessage?: {
      enabled?: boolean;
      template?: string;
    };
    addedToChannel?: {
      enabled?: boolean;
      template?: string;
    };
    removedFromChannel?: {
      enabled?: boolean;
      template?: string;
    };
    invitedToChannel?: {
      enabled?: boolean;
      template?: string;
    };
  };
  postWebhookUrl?: string;
  preWebhookUrl?: string;
  reachabilityEnabled?: boolean;
  readStatusEnabled?: boolean;
  typingIndicatorTimeout?: number;
  webhookFilters?: string[];
  webhookMethod?: string;
  webhooks?: {
    onMessageSend?: {
      url?: string;
      method?: string;
      format?: string;
    };
    onMessageUpdate?: {
      url?: string;
      method?: string;
      format?: string;
    };
    onMessageRemove?: {
      url?: string;
      method?: string;
      format?: string;
    };
    onChannelAdd?: {
      url?: string;
      method?: string;
      format?: string;
    };
    onChannelDestroy?: {
      url?: string;
      method?: string;
      format?: string;
    };
    onChannelUpdate?: {
      url?: string;
      method?: string;
      format?: string;
    };
    onMemberAdd?: {
      url?: string;
      method?: string;
      format?: string;
    };
    onMemberRemove?: {
      url?: string;
      method?: string;
      format?: string;
    };
    onMessageSent?: {
      url?: string;
      method?: string;
      format?: string;
    };
    onMessageUpdated?: {
      url?: string;
      method?: string;
      format?: string;
    };
    onMessageRemoved?: {
      url?: string;
      method?: string;
      format?: string;
    };
    onChannelAdded?: {
      url?: string;
      method?: string;
      format?: string;
    };
    onChannelDestroyed?: {
      url?: string;
      method?: string;
      format?: string;
    };
    onChannelUpdated?: {
      url?: string;
      method?: string;
      format?: string;
    };
    onMemberAdded?: {
      url?: string;
      method?: string;
      format?: string;
    };
    onMemberRemoved?: {
      url?: string;
      method?: string;
      format?: string;
    };
  };
}

interface ServiceListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ServiceContext;
  /**
   * create a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: ServiceListInstanceCreateOptions, callback?: (error: Error | null, item: ServiceInstance) => any): Promise<ServiceInstance>;
  /**
   * Streams ServiceInstance records from the API.
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
  each(opts?: ServiceListInstanceEachOptions, callback?: (item: ServiceInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a service
   *
   * @param sid - The sid
   */
  get(sid: string): ServiceContext;
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ServiceListInstanceOptions, callback?: (error: Error | null, items: ServiceInstance[]) => any): Promise<ServiceInstance[]>;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ServiceListInstancePageOptions, callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
}

/**
 * Options to pass to create
 *
 * @property friendlyName - Human-readable name for this service instance
 */
interface ServiceListInstanceCreateOptions {
  friendlyName: string;
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
interface ServiceListInstanceEachOptions {
  callback?: (item: ServiceInstance, done: (err?: Error) => void) => void;
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
interface ServiceListInstanceOptions {
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
interface ServiceListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface ServicePayload extends ServiceResource, Page.TwilioResponsePayload {
}

interface ServiceResource {
  account_sid: string;
  consumption_report_interval: number;
  date_created: Date;
  date_updated: Date;
  default_channel_creator_role_sid: string;
  default_channel_role_sid: string;
  default_service_role_sid: string;
  friendly_name: string;
  limits: string;
  links: string;
  notifications: string;
  post_webhook_url: string;
  pre_webhook_url: string;
  reachability_enabled: boolean;
  read_status_enabled: boolean;
  sid: string;
  typing_indicator_timeout: number;
  url: string;
  webhook_filters: string;
  webhook_method: string;
  webhooks: string;
}

interface ServiceSolution {
}


declare class ServicePage extends Page<V1, ServicePayload, ServiceResource, ServiceInstance> {
  /**
   * Initialize the ServicePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: ServiceSolution);

  /**
   * Build an instance of ServiceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ServicePayload): ServiceInstance;
}


declare class ServiceInstance extends SerializableClass {
  /**
   * Initialize the ServiceContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account responsible for this service.
   * @property friendlyName - The human-readable name of this service.
   * @property dateCreated - The date that this resource was created
   * @property dateUpdated - The date that this resource was last updated
   * @property defaultServiceRoleSid - The service role assigned to users when they are added to the service.
   * @property defaultChannelRoleSid - The channel role assigned to users when they are added to a channel.
   * @property defaultChannelCreatorRoleSid - The channel role assigned to a channel creator when joining a new channel.
   * @property readStatusEnabled - Enable the Message Constumption Horizon feature.
   * @property reachabilityEnabled - Indicates whether the  the Reachability feature is enabled for this Service instance.
   * @property typingIndicatorTimeout - The amount of time after a "started typing" event when clients should assume that user is no longer typing, even if no "ended typing" message was received.
   * @property consumptionReportInterval - The interval between consumption reports submission batches from client endpoints.
   * @property limits - The limits
   * @property webhooks - The webhooks
   * @property preWebhookUrl - The webhook URL for PRE-Event webhooks.
   * @property postWebhookUrl - The webhook URL for POST-Event webhooks.
   * @property webhookMethod - The webhook request format to use.
   * @property webhookFilters - The list of WebHook events that are enabled for this Service instance.
   * @property notifications - Notification configuration for the Service instance.
   * @property url - An absolute URL for this service.
   * @property links - URLs to access the Channels, Roles, and Users for this service.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: V1, payload: ServicePayload, sid: string);

  private _proxy: ServiceContext;
  accountSid: string;
  /**
   * Access the channels
   */
  channels(): ChannelListInstance;
  consumptionReportInterval: number;
  dateCreated: Date;
  dateUpdated: Date;
  defaultChannelCreatorRoleSid: string;
  defaultChannelRoleSid: string;
  defaultServiceRoleSid: string;
  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ServiceInstance) => any): void;
  friendlyName: string;
  limits: string;
  links: string;
  notifications: string;
  postWebhookUrl: string;
  preWebhookUrl: string;
  reachabilityEnabled: boolean;
  readStatusEnabled: boolean;
  /**
   * remove a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * Access the roles
   */
  roles(): RoleListInstance;
  sid: string;
  /**
   * Produce a plain JSON object version of the ServiceInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  typingIndicatorTimeout: number;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ServiceInstanceUpdateOptions, callback?: (error: Error | null, items: ServiceInstance) => any): void;
  url: string;
  /**
   * Access the users
   */
  users(): UserListInstance;
  webhookFilters: string;
  webhookMethod: string;
  webhooks: string;
}


declare class ServiceContext {
  /**
   * Initialize the ServiceContext
   *
   * @property channels - channels resource
   * @property roles - roles resource
   * @property users - users resource
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: V1, sid: string);

  channels?: ChannelListInstance;
  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * remove a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ServiceInstance) => any): void;
  roles?: RoleListInstance;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ServiceInstanceUpdateOptions, callback?: (error: Error | null, items: ServiceInstance) => any): void;
  users?: UserListInstance;
}

export { ServiceContext, ServiceInstance, ServiceList, ServiceListInstance, ServiceListInstanceCreateOptions, ServiceListInstanceEachOptions, ServiceListInstanceOptions, ServiceListInstancePageOptions, ServicePage, ServicePayload, ServiceResource, ServiceSolution }
