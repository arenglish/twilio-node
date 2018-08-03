/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import Studio = require('../../Studio');
import { SerializableClass } from '../../../../interfaces';
import { StepList } from './engagement/step';
import { StepListInstance } from './engagement/step';

type EngagementStatus = 'active'|'ended';

/**
 * @description Initialize the EngagementList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param flowSid - Flow Sid.
 */
declare function EngagementList(version: Studio, flowSid: string): EngagementListInstance;

interface EngagementListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): EngagementContext;
  /**
   * create a EngagementInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: EngagementListInstanceCreateOptions, callback?: (error: Error | null, item: EngagementInstance) => any): Promise<EngagementInstance>;
  /**
   * Streams EngagementInstance records from the API.
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
  each(opts?: EngagementListInstanceEachOptions, callback?: (item: EngagementInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a engagement
   *
   * @param sid - The sid
   */
  get(sid: string): EngagementContext;
  /**
   * Retrieve a single target page of EngagementInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: EngagementPage) => any): Promise<EngagementPage>;
  /**
   * Lists EngagementInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: EngagementListInstanceOptions, callback?: (error: Error | null, items: EngagementInstance[]) => any): Promise<EngagementInstance[]>;
  /**
   * Retrieve a single page of EngagementInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: EngagementListInstancePageOptions, callback?: (error: Error | null, items: EngagementPage) => any): Promise<EngagementPage>;
}

/**
 * Options to pass to create
 *
 * @property from - The from
 * @property parameters - The parameters
 * @property to - The to
 */
interface EngagementListInstanceCreateOptions {
  from: string;
  parameters?: string;
  to: string;
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
interface EngagementListInstanceEachOptions {
  callback?: (item: EngagementInstance, done: (err?: Error) => void) => void;
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
interface EngagementListInstanceOptions {
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
interface EngagementListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface EngagementPayload extends EngagementResource, Page.TwilioResponsePayload {
}

interface EngagementResource {
  account_sid: string;
  contact_channel_address: string;
  contact_sid: string;
  context: string;
  date_created: Date;
  date_updated: Date;
  flow_sid: string;
  links: string;
  sid: string;
  status: EngagementStatus;
  url: string;
}

interface EngagementSolution {
  flowSid?: string;
}


declare class EngagementPage extends Page<Studio, EngagementPayload, EngagementResource, EngagementInstance> {
  /**
   * Initialize the EngagementPagePLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Studio, response: Response<string>, solution: EngagementSolution);

  /**
   * Build an instance of EngagementInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: EngagementPayload): EngagementInstance;
}


declare class EngagementInstance extends SerializableClass {
  /**
   * Initialize the EngagementContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this Engagement.
   * @property accountSid - Account Sid.
   * @property flowSid - Flow Sid.
   * @property contactSid - Contact Sid.
   * @property contactChannelAddress - The phone number, SIP address or Client identifier that triggered this Engagement.
   * @property status - The Status of this Engagement
   * @property context - Nested resource URLs.
   * @property dateCreated - The date this Engagement was created
   * @property dateUpdated - The date this Engagement was updated
   * @property url - The URL of this resource.
   * @property links - Nested resource URLs.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param flowSid - Flow Sid.
   * @param sid - The sid
   */
  constructor(version: Studio, payload: EngagementPayload, flowSid: string, sid: string);

  private _proxy: EngagementContext;
  accountSid: string;
  contactChannelAddress: string;
  contactSid: string;
  context: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a EngagementInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: EngagementInstance) => any): void;
  flowSid: string;
  links: string;
  sid: string;
  status: EngagementStatus;
  /**
   * Access the steps
   */
  steps(): StepListInstance;
  /**
   * Produce a plain JSON object version of the EngagementInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  url: string;
}


declare class EngagementContext {
  /**
   * Initialize the EngagementContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property steps - steps resource
   *
   * @param version - Version of the resource
   * @param flowSid - The flow_sid
   * @param sid - The sid
   */
  constructor(version: Studio, flowSid: string, sid: string);

  /**
   * fetch a EngagementInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: EngagementInstance) => any): void;
  steps?: StepListInstance;
}

export { EngagementContext, EngagementInstance, EngagementList, EngagementListInstance, EngagementListInstanceCreateOptions, EngagementListInstanceEachOptions, EngagementListInstanceOptions, EngagementListInstancePageOptions, EngagementPage, EngagementPayload, EngagementResource, EngagementSolution }
