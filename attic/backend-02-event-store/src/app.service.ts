import { Injectable } from '@nestjs/common';
import {
  EventStoreDBClient,
  jsonEvent,
  FORWARDS,
  START,
  JSONEventType,
} from '@eventstore/db-client';

interface Reservation {
  reservationId: string;
  movieId: string;
  userId: string;
  seatId: string;
}

type SeatReservedEvent = JSONEventType<
  'seat-reserved',
  {
    reservationId: string;
    movieId: string;
    userId: string;
    seatId: string;
  }
>;

type SeatChangedEvent = JSONEventType<
  'seat-changed',
  {
    reservationId: string;
    newSeatId: string;
  }
>;

type ReservationEvents = SeatReservedEvent | SeatChangedEvent;

async function simpleTest(client: EventStoreDBClient): Promise<string> {
  const streamName = 'booking-abc123';

  await client.appendToStream(
    streamName,
    jsonEvent<SeatReservedEvent>({
      type: 'seat-reserved',
      data: {
        reservationId: 'abc123',
        movieId: 'tt0368226',
        userId: 'nm0802995',
        seatId: '4b',
      },
    }),
  );

  await client.appendToStream(
    streamName,
    jsonEvent<SeatChangedEvent>({
      type: 'seat-changed',
      data: {
        reservationId: 'abc123',
        newSeatId: '5a',
      },
    }),
  );

  const events = await client.readStream<ReservationEvents>(streamName, {
    fromRevision: START,
    direction: FORWARDS,
    maxCount: 10,
  });

  const reservation: Partial<Reservation> = {};

  for await (const { event } of events) {
    switch (event.type) {
      case 'seat-reserved': {
        reservation.reservationId = event.data.reservationId;
        reservation.movieId = event.data.movieId;
        reservation.seatId = event.data.seatId;
        reservation.userId = event.data.userId;
        break;
      }
      case 'seat-changed': {
        reservation.seatId = event.data.newSeatId;
        break;
      }
    }
  }

  return JSON.stringify(reservation);
}

@Injectable()
export class AppService {
  constructor(private readonly eventStore: EventStoreDBClient) {}

  getHello(): string {
    return 'Hello World!';
  }

  async testEventStore(): Promise<string> {
    return simpleTest(this.eventStore);
  }
}
