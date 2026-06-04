import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { CalendarEventTitleFormatter } from 'angular-calendar';

registerLocaleData(localeFr);

// Formateur personnalisé pour le titre des événements
import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Injectable()
export class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
  override weekTooltip(event: CalendarEvent): string {
    return '';
  }
  override monthTooltip(event: CalendarEvent): string {
    return '';
  }
}