import React, { Component } from "react";
import { makeAutoObservable } from "mobx";

export default class checkoutController {
  step = 1;
  constructor() {
    makeAutoObservable(this);
  }
}
