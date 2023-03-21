import * as amplitude from "@amplitude/analytics-browser";

export default (to: any, from: any) => {
  console.log(`route changed to ${to.path} from ${from.path}`);
  amplitude.logEvent(`route changed to ${to.path} from ${from.path}`);
};
