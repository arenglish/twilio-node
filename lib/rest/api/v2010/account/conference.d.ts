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
import { ParticipantList } from './conference/participant';
import { RecordingList } from './conference/recording';
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the ConferenceList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique sid that identifies this account
 */
declare function ConferenceList(version: V2010, accountSid: string): ConferenceListInstance;

/**
 * Options to pass to update
 *
 * @property announceMethod - Specify GET or POST, defaults to POST
 * @property announceUrl - The 'AnnounceUrl' attribute lets you specify a URL for announcing something into a conference.
 * @property status - Specifying completed will end the conference and kick all participants
 */
interface ConferenceInstanceUpdateOptions {
  announceMethod?: string;
  announceUrl?: string;
  status?: ConferenceUpdateStatus;
}

interface ConferenceListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ConferenceContext;
  /**
   * Streams ConferenceInstance records from the API.
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
  each(opts?: ConferenceListInstanceEachOptions, callback?: (item: ConferenceInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a conference
   *
   * @param sid - Fetch by unique conference Sid
   */
  get(sid: string): ConferenceContext;
  /**
   * Retrieve a single target page of ConferenceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ConferencePage) => any): Promise<ConferencePage>;
  /**
   * Lists ConferenceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ConferenceListInstanceOptions, callback?: (error: Error | null, items: ConferenceInstance[]) => any): Promise<ConferenceInstance[]>;
  /**
   * Retrieve a single page of ConferenceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ConferenceListInstancePageOptions, callback?: (error: Error | null, items: ConferencePage) => any): Promise<ConferencePage>;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property dateCreated - Filter by date created
 * @property dateCreatedAfter - Filter by date created
 * @property dateCreatedBefore - Filter by date created
 * @property dateUpdated - Filter by date updated
 * @property dateUpdatedAfter - Filter by date updated
 * @property dateUpdatedBefore - Filter by date updated
 * @property done - Function to be called upon completion of streaming
 * @property friendlyName - Filter by friendly name
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
 * @property status - The status of the conference
 */
interface ConferenceListInstanceEachOptions {
  callback?: (item: ConferenceInstance, done: (err?: Error) => void) => void;
  dateCreated?: Date;
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  dateUpdated?: Date;
  dateUpdatedAfter?: Date;
  dateUpdatedBefore?: Date;
  done?: Function;
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
  status?: ConferenceStatus;
}

/**
 * Options to pass to list
 *
 * @property dateCreated - Filter by date created
 * @property dateCreatedAfter - Filter by date created
 * @property dateCreatedBefore - Filter by date created
 * @property dateUpdated - Filter by date updated
 * @property dateUpdatedAfter - Filter by date updated
 * @property dateUpdatedBefore - Filter by date updated
 * @property friendlyName - Filter by friendly name
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
 * @property status - The status of the conference
 */
interface ConferenceListInstanceOptions {
  dateCreated?: Date;
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  dateUpdated?: Date;
  dateUpdatedAfter?: Date;
  dateUpdatedBefore?: Date;
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
  status?: ConferenceStatus;
}

/**
 * Options to pass to page
 *
 * @property dateCreated - Filter by date created
 * @property dateCreatedAfter - Filter by date created
 * @property dateCreatedBefore - Filter by date created
 * @property dateUpdated - Filter by date updated
 * @property dateUpdatedAfter - Filter by date updated
 * @property dateUpdatedBefore - Filter by date updated
 * @property friendlyName - Filter by friendly name
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property status - The status of the conference
 */
interface ConferenceListInstancePageOptions {
  dateCreated?: Date;
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  dateUpdated?: Date;
  dateUpdatedAfter?: Date;
  dateUpdatedBefore?: Date;
  friendlyName?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  status?: ConferenceStatus;
}

interface ConferencePayload extends ConferenceResource, Page.TwilioResponsePayload {
}

interface ConferenceResource {
  account_sid: string;
  api_version: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  region: string;
  sid: string;
  status: ConferenceStatus;
  subresource_uris: string;
  uri: string;
}

interface ConferenceSolution {
  accountSid?: string;
}


declare class ConferencePage extends Page<V2010, ConferencePayload, ConferenceResource, ConferenceInstance> {
  /**
   * Initialize the ConferencePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: ConferenceSolution);

  /**
   * Build an instance of ConferenceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ConferencePayload): ConferenceInstance;
}


declare class ConferenceInstance extends SerializableClass {
  /**
   * Initialize the ConferenceContext
   *
   * @property accountSid - The unique sid that identifies this account
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property apiVersion - The api_version
   * @property friendlyName - A human readable description of this resource
   * @property region - A string representing the Twilio Region where the conference was mixed.
   * @property sid - A string that uniquely identifies this conference
   * @property status - The status of the conference
   * @property uri - The URI for this resource
   * @property subresourceUris - The subresource_uris
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   * @param sid - Fetch by unique conference Sid
   */
  constructor(version: V2010, payload: ConferencePayload, accountSid: string, sid: string);

  private _proxy: ConferenceContext;
  accountSid: string;
  apiVersion: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a ConferenceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ConferenceInstance) => any): void;
  friendlyName: string;
  /**
   * Access the participants
   */
  participants();
  /**
   * Access the recordings
   */
  recordings();
  region: string;
  sid: string;
  status: conference.status;
  subresourceUris: string;
  /**
   * Produce a plain JSON object version of the ConferenceInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  /**
   * update a ConferenceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ConferenceInstanceUpdateOptions, callback?: (error: Error | null, items: ConferenceInstance) => any): void;
  uri: string;
}


declare class ConferenceContext {
  /**
   * Initialize the ConferenceContext
   *
   * @property participants - participants resource
   * @property recordings - recordings resource
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique conference Sid
   */
  constructor(version: V2010, accountSid: string, sid: string);

  /**
   * fetch a ConferenceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ConferenceInstance) => any): void;
  participants?: Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantList;
  recordings?: Twilio.Api.V2010.AccountContext.ConferenceContext.RecordingList;
  /**
   * update a ConferenceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ConferenceInstanceUpdateOptions, callback?: (error: Error | null, items: ConferenceInstance) => any): void;
}

export { ConferenceContext, ConferenceInstance, ConferenceList, ConferenceListInstance, ConferenceListInstanceEachOptions, ConferenceListInstanceOptions, ConferenceListInstancePageOptions, ConferencePage, ConferencePayload, ConferenceResource, ConferenceSolution }
