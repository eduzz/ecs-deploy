import { setFailed } from '@actions/core';
import { readdirSync } from 'fs';

try {
  // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`The event payload: ${payload}`);
  const contents = readdirSync(".")

  console.log(JSON.stringify(contents, null, 2))
} catch (error) {
  setFailed(error.message);
}