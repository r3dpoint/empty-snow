import { EventStoreDBClient } from '@eventstore/db-client';
import { Module, Global } from '@nestjs/common';

const EventStore = {
  provide: EventStoreDBClient,
  useFactory: () =>
    EventStoreDBClient.connectionString(process.env.EVENT_STORE_DB_URL),
};

@Global()
@Module({ providers: [EventStore], exports: [EventStore] })
export class EventStoreModule {}
