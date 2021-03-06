



/* eslint-disable */

'use strict';

/*::
              import type { ReaderFragment } from 'relay-runtime';
              import type { FragmentReference } from "relay-runtime";
              declare export opaque type ForceLogin_Viewer$ref: FragmentReference;
              declare export opaque type ForceLogin_Viewer$fragmentType: ForceLogin_Viewer$ref;
              export type ForceLogin_Viewer = {|
                +User_IsAnonymous: ?boolean,
                +$refType: ForceLogin_Viewer$ref,
              |};
              export type ForceLogin_Viewer$data = ForceLogin_Viewer;
              export type ForceLogin_Viewer$key = {
                +$data?: ForceLogin_Viewer$data,
                +$fragmentRefs: ForceLogin_Viewer$ref,
                ...
              };
              */


const node /*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ForceLogin_Viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "User_IsAnonymous",
    "args": null,
    "storageKey": null }] };



// prettier-ignore
node /*: any*/.hash = 'd151b8b9bbc5ff9646c6ee42bbfda029';
module.exports = node;
//# sourceMappingURL=ForceLogin_Viewer.graphql.js.map