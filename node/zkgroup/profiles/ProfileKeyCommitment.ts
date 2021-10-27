//
// Copyright 2020-2021 Signal Messenger, LLC.
// SPDX-License-Identifier: AGPL-3.0-only
//

import ByteArray from '../internal/ByteArray';
import NativeImpl from '../../NativeImpl';

export default class ProfileKeyCommitment extends ByteArray {
  constructor(contents: Buffer) {
    super(contents, NativeImpl.ProfileKeyCommitment_CheckValidContents);
  }
}
