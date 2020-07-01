// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeSpeed = document.getElementById('changeSpeed');
changeSpeed.oninput = function(element) {
	let speed = element.target.value/10;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.getElementsByTagName("video")[0].playbackRate = "' + speed + '";'});
    });
  };	