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

/**
 * @description Initialize the WorkflowCumulativeStatisticsList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The workspace_sid
 * @param workflowSid - The workflow_sid
 */
declare function WorkflowCumulativeStatisticsList(version: V1, workspaceSid: string, workflowSid: string): WorkflowCumulativeStatisticsListInstance;

/**
 * Options to pass to fetch
 *
 * @property endDate - Filter cumulative statistics by an end date.
 * @property minutes - Filter cumulative statistics by up to 'x' minutes in the past.
 * @property splitByWaitTime - A comma separated values for viewing splits of tasks canceled and accepted above the given threshold in seconds.
 * @property startDate - Filter cumulative statistics by a start date.
 * @property taskChannel - Filter real-time and cumulative statistics by TaskChannel.
 */
interface WorkflowCumulativeStatisticsInstanceFetchOptions {
  endDate?: Date;
  minutes?: number;
  splitByWaitTime?: string;
  startDate?: Date;
  taskChannel?: string;
}

interface WorkflowCumulativeStatisticsListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): WorkflowCumulativeStatisticsContext;
  /**
   * Constructs a workflow_cumulative_statistics
   */
  get(): WorkflowCumulativeStatisticsContext;
}

interface WorkflowCumulativeStatisticsPayload extends WorkflowCumulativeStatisticsResource, Page.TwilioResponsePayload {
}

interface WorkflowCumulativeStatisticsResource {
  account_sid: string;
  avg_task_acceptance_time: number;
  end_time: Date;
  reservations_accepted: number;
  reservations_canceled: number;
  reservations_created: number;
  reservations_rejected: number;
  reservations_rescinded: number;
  reservations_timed_out: number;
  split_by_wait_time: string;
  start_time: Date;
  tasks_canceled: number;
  tasks_completed: number;
  tasks_deleted: number;
  tasks_entered: number;
  tasks_moved: number;
  tasks_timed_out_in_workflow: number;
  url: string;
  wait_duration_until_accepted: string;
  wait_duration_until_canceled: string;
  workflow_sid: string;
  workspace_sid: string;
}

interface WorkflowCumulativeStatisticsSolution {
  workflowSid?: string;
  workspaceSid?: string;
}


declare class WorkflowCumulativeStatisticsPage extends Page<V1, WorkflowCumulativeStatisticsPayload, WorkflowCumulativeStatisticsResource, WorkflowCumulativeStatisticsInstance> {
  /**
   * Initialize the WorkflowCumulativeStatisticsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: WorkflowCumulativeStatisticsSolution);

  /**
   * Build an instance of WorkflowCumulativeStatisticsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WorkflowCumulativeStatisticsPayload): WorkflowCumulativeStatisticsInstance;
}


declare class WorkflowCumulativeStatisticsInstance extends SerializableClass {
  /**
   * Initialize the WorkflowCumulativeStatisticsContext
   *
   * @property accountSid - The account_sid
   * @property avgTaskAcceptanceTime - The average time from Task creation to acceptance
   * @property startTime - The start_time
   * @property endTime - The end_time
   * @property reservationsCreated - The total number of Reservations that were created for Workers
   * @property reservationsAccepted - The total number of Reservations accepted by Workers
   * @property reservationsRejected - The total number of Reservations that were rejected
   * @property reservationsTimedOut - The total number of Reservations that were timed out
   * @property reservationsCanceled - The total number of Reservations that were canceled
   * @property reservationsRescinded - The total number of Reservations that were rescinded
   * @property splitByWaitTime - The splits of the tasks canceled and accepted based on the provided SplitByWaitTime parameter.
   * @property waitDurationUntilAccepted - The wait duration stats for tasks that were accepted.
   * @property waitDurationUntilCanceled - The wait duration stats for tasks that were canceled.
   * @property tasksCanceled - The total number of Tasks that were canceled
   * @property tasksCompleted - The total number of Tasks that were completed
   * @property tasksEntered - The total number of Tasks that entered this Workflow
   * @property tasksDeleted - The total number of Tasks that were deleted
   * @property tasksMoved - The total number of Tasks that were moved from one queue to another
   * @property tasksTimedOutInWorkflow - The total number of Tasks that were timed out of their Workflows
   * @property workflowSid - The workflow_sid
   * @property workspaceSid - The workspace_sid
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The workspace_sid
   * @param workflowSid - The workflow_sid
   */
  constructor(version: V1, payload: WorkflowCumulativeStatisticsPayload, workspaceSid: string, workflowSid: string);

  private _proxy: WorkflowCumulativeStatisticsContext;
  accountSid: string;
  avgTaskAcceptanceTime: number;
  endTime: Date;
  /**
   * fetch a WorkflowCumulativeStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: WorkflowCumulativeStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: WorkflowCumulativeStatisticsInstance) => any): void;
  reservationsAccepted: number;
  reservationsCanceled: number;
  reservationsCreated: number;
  reservationsRejected: number;
  reservationsRescinded: number;
  reservationsTimedOut: number;
  splitByWaitTime: string;
  startTime: Date;
  tasksCanceled: number;
  tasksCompleted: number;
  tasksDeleted: number;
  tasksEntered: number;
  tasksMoved: number;
  tasksTimedOutInWorkflow: number;
  /**
   * Produce a plain JSON object version of the WorkflowCumulativeStatisticsInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  url: string;
  waitDurationUntilAccepted: string;
  waitDurationUntilCanceled: string;
  workflowSid: string;
  workspaceSid: string;
}


declare class WorkflowCumulativeStatisticsContext {
  /**
   * Initialize the WorkflowCumulativeStatisticsContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   * @param workflowSid - The workflow_sid
   */
  constructor(version: V1, workspaceSid: string, workflowSid: string);

  /**
   * fetch a WorkflowCumulativeStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: WorkflowCumulativeStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: WorkflowCumulativeStatisticsInstance) => any): void;
}

export { WorkflowCumulativeStatisticsContext, WorkflowCumulativeStatisticsInstance, WorkflowCumulativeStatisticsList, WorkflowCumulativeStatisticsListInstance, WorkflowCumulativeStatisticsPage, WorkflowCumulativeStatisticsPayload, WorkflowCumulativeStatisticsResource, WorkflowCumulativeStatisticsSolution }
