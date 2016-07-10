/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { EditorComponent } from './editor.component';

describe('Component: Editor', () => {
  it('should create an instance', () => {
    let component = new EditorComponent();
    expect(component).toBeTruthy();
  });
});
