/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
	deviceReadyDeferred : $.Deferred(),
	jqmReadyDeferred : $.Deferred(),
	// Application Constructor
	initialize : function() {
		this.bindEvents();
		$.when(this.deviceReadyDeferred, this.jqmReadyDeferred).then(
				this.frameworksInitialized);
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents : function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
		$(document).on("mobileinit", function() {
			app.jqmReadyDeferred.resolve();
		});
	},
	// deviceready Event Handler
	onDeviceReady : function() {
		app.deviceReadyDeferred.resolve();
	},
	// jQM and PhoneGap initialized
	// place app initialization code here
	frameworksInitialized : function() {
		console.log('Frameworks initialized');
	}
};

app.initialize();
function openSite(){
	
    var ref = window.open('http://shawacademy.com', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function(event) { alert(event.url); });
}
    
function geo(){
	
    // onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
    //
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}