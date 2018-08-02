/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

type ReservationCallStatus = 'initiated'|'ringing'|'answered'|'completed';

type ReservationConferenceEvent = 'start'|'end'|'join'|'leave'|'mute'|'hold'|'speaker';

type ReservationStatus = 'pending'|'accepted'|'rejected'|'timeout'|'canceled'|'rescinded';

type ReservationSupervisorMode = 'monitor'|'whisper'|'barge';

/**
 * @description Initialize the ReservationList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The ID of the Workspace that this task is contained within.
 * @param taskSid - The ID of the reserved Task
 */
declare function ReservationList(version: V1, workspaceSid: string, taskSid: string): ReservationListInstance;

/**
 * Options to pass to update
 *
 * @property beep - The beep
 * @property callAccept - Flag to determine if reservation should be accepted when executing a Call instruction
 * @property callFrom - Caller ID for the outbound call when executing a Call instruction
 * @property callRecord - Attribute to record both legs of a call when executing a Call instruction
 * @property callStatusCallbackUrl - Callback URL for completed call event when executing a Call instruction
 * @property callTimeout - Timeout for call when executing a Call instruction
 * @property callTo - Contact URI of the worker when executing a Call instruction
 * @property callUrl - TwiML URI executed on answering the worker's leg as a result of the Call instruction
 * @property conferenceRecord - The conference_record
 * @property conferenceRecordingStatusCallback - The conference_recording_status_callback
 * @property conferenceRecordingStatusCallbackMethod - The conference_recording_status_callback_method
 * @property conferenceStatusCallback - The conference_status_callback
 * @property conferenceStatusCallbackEvent - The conference_status_callback_event
 * @property conferenceStatusCallbackMethod - The conference_status_callback_method
 * @property conferenceTrim - The conference_trim
 * @property dequeueFrom - Caller ID for the call to the worker when executing a Dequeue instruction
 * @property dequeuePostWorkActivitySid - New worker activity sid after executing a Dequeue instruction
 * @property dequeueRecord - Attribute to record both legs of a call when executing a Dequeue instruction
 * @property dequeueStatusCallbackEvent - Call progress events sent via webhooks as a result of a Dequeue instruction
 * @property dequeueStatusCallbackUrl - Callback URL for completed call event when executing a Dequeue instruction
 * @property dequeueTimeout - Timeout for call when executing a Dequeue instruction
 * @property dequeueTo - Contact URI of the worker when executing a Dequeue instruction
 * @property earlyMedia - The early_media
 * @property endConferenceOnExit - The end_conference_on_exit
 * @property from - Caller ID for the call to the worker when executing a Conference instruction
 * @property instruction - Assignment instruction for reservation
 * @property maxParticipants - The max_participants
 * @property muted - The muted
 * @property postWorkActivitySid - New worker activity sid after executing a Conference instruction
 * @property record - The record
 * @property recordingChannels - The recording_channels
 * @property recordingStatusCallback - The recording_status_callback
 * @property recordingStatusCallbackMethod - The recording_status_callback_method
 * @property redirectAccept - Flag to determine if reservation should be accepted when executing a Redirect instruction
 * @property redirectCallSid - Call sid of the call parked in the queue when executing a Redirect instruction
 * @property redirectUrl - TwiML URI to redirect the call to when executing the Redirect instruction
 * @property region - The region
 * @property reservationStatus - New reservation status
 * @property sipAuthPassword - The sip_auth_password
 * @property sipAuthUsername - The sip_auth_username
 * @property startConferenceOnEnter - The start_conference_on_enter
 * @property statusCallback - The status_callback
 * @property statusCallbackEvent - The status_callback_event
 * @property statusCallbackMethod - The status_callback_method
 * @property supervisor - Supervisor sid/uri when executing the Supervise instruction
 * @property supervisorMode - Supervisor mode when executing the Supervise instruction
 * @property timeout - Timeout for call when executing a Conference instruction
 * @property to - Contact URI of the worker when executing a Conference instruction
 * @property waitMethod - The wait_method
 * @property waitUrl - The wait_url
 * @property workerActivitySid - New worker activity sid if rejecting a reservation
 */
interface ReservationInstanceUpdateOptions {
  beep?: string;
  callAccept?: boolean;
  callFrom?: string;
  callRecord?: string;
  callStatusCallbackUrl?: string;
  callTimeout?: number;
  callTo?: string;
  callUrl?: string;
  conferenceRecord?: string;
  conferenceRecordingStatusCallback?: string;
  conferenceRecordingStatusCallbackMethod?: string;
  conferenceStatusCallback?: string;
  conferenceStatusCallbackEvent?: ReservationConferenceEvent[];
  conferenceStatusCallbackMethod?: string;
  conferenceTrim?: string;
  dequeueFrom?: string;
  dequeuePostWorkActivitySid?: string;
  dequeueRecord?: string;
  dequeueStatusCallbackEvent?: string[];
  dequeueStatusCallbackUrl?: string;
  dequeueTimeout?: number;
  dequeueTo?: string;
  earlyMedia?: boolean;
  endConferenceOnExit?: boolean;
  from?: string;
  instruction?: string;
  maxParticipants?: number;
  muted?: boolean;
  postWorkActivitySid?: string;
  record?: boolean;
  recordingChannels?: string;
  recordingStatusCallback?: string;
  recordingStatusCallbackMethod?: string;
  redirectAccept?: boolean;
  redirectCallSid?: string;
  redirectUrl?: string;
  region?: string;
  reservationStatus?: ReservationStatus;
  sipAuthPassword?: string;
  sipAuthUsername?: string;
  startConferenceOnEnter?: boolean;
  statusCallback?: string;
  statusCallbackEvent?: ReservationCallStatus[];
  statusCallbackMethod?: string;
  supervisor?: string;
  supervisorMode?: ReservationSupervisorMode;
  timeout?: number;
  to?: string;
  waitMethod?: string;
  waitUrl?: string;
  workerActivitySid?: string;
}

interface ReservationListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ReservationContext;
  /**
   * Streams ReservationInstance records from the API.
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
  each(opts?: ReservationListInstanceEachOptions, callback?: (item: ReservationInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a reservation
   *
   * @param sid - The sid
   */
  get(sid: string): ReservationContext;
  /**
   * Retrieve a single target page of ReservationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ReservationPage) => any): Promise<ReservationPage>;
  /**
   * Lists ReservationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ReservationListInstanceOptions, callback?: (error: Error | null, items: ReservationInstance[]) => any): Promise<ReservationInstance[]>;
  /**
   * Retrieve a single page of ReservationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ReservationListInstancePageOptions, callback?: (error: Error | null, items: ReservationPage) => any): Promise<ReservationPage>;
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
 * @property reservationStatus - Returns the list of reservations for a task with a specified ReservationStatus
 */
interface ReservationListInstanceEachOptions {
  callback?: (item: ReservationInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
  reservationStatus?: ReservationStatus;
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
 * @property reservationStatus - Returns the list of reservations for a task with a specified ReservationStatus
 */
interface ReservationListInstanceOptions {
  limit?: number;
  pageSize?: number;
  reservationStatus?: ReservationStatus;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property reservationStatus - Returns the list of reservations for a task with a specified ReservationStatus
 */
interface ReservationListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  reservationStatus?: ReservationStatus;
}

interface ReservationPayload extends ReservationResource, Page.TwilioResponsePayload {
}

interface ReservationResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  links: string;
  reservation_status: ReservationStatus;
  sid: string;
  task_sid: string;
  url: string;
  worker_name: string;
  worker_sid: string;
  workspace_sid: string;
}

interface ReservationSolution {
  taskSid?: string;
  workspaceSid?: string;
}


declare class ReservationPage extends Page<V1, ReservationPayload, ReservationResource, ReservationInstance> {
  /**
   * Initialize the ReservationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: ReservationSolution);

  /**
   * Build an instance of ReservationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ReservationPayload): ReservationInstance;
}


declare class ReservationInstance extends SerializableClass {
  /**
   * Initialize the ReservationContext
   *
   * @property accountSid - The ID of the Account that owns this Task
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property reservationStatus - The current status of the reservation.
   * @property sid - The unique ID of this Reservation.
   * @property taskSid - The ID of the reserved Task
   * @property workerName - Human readable description of the Worker that is reserved
   * @property workerSid - The ID of the reserved Worker
   * @property workspaceSid - The ID of the Workspace that this task is contained within.
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The ID of the Workspace that this task is contained within.
   * @param taskSid - The ID of the reserved Task
   * @param sid - The sid
   */
  constructor(version: V1, payload: ReservationPayload, workspaceSid: string, taskSid: string, sid: string);

  private _proxy: ReservationContext;
  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a ReservationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ReservationInstance) => any): void;
  links: string;
  reservationStatus: reservation.status;
  sid: string;
  taskSid: string;
  /**
   * Produce a plain JSON object version of the ReservationInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  /**
   * update a ReservationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ReservationInstanceUpdateOptions, callback?: (error: Error | null, items: ReservationInstance) => any): void;
  url: string;
  workerName: string;
  workerSid: string;
  workspaceSid: string;
}


declare class ReservationContext {
  /**
   * Initialize the ReservationContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   * @param taskSid - The task_sid
   * @param sid - The sid
   */
  constructor(version: V1, workspaceSid: string, taskSid: string, sid: string);

  /**
   * fetch a ReservationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ReservationInstance) => any): void;
  /**
   * update a ReservationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ReservationInstanceUpdateOptions, callback?: (error: Error | null, items: ReservationInstance) => any): void;
}

export { ReservationContext, ReservationInstance, ReservationList, ReservationListInstance, ReservationListInstanceEachOptions, ReservationListInstanceOptions, ReservationListInstancePageOptions, ReservationPage, ReservationPayload, ReservationResource, ReservationSolution }
