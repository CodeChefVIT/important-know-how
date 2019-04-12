package main

import (
	"log"

	"github.com/angadsharma1016/event_sourcing_NATS/pb"
	"github.com/gogo/protobuf/proto"
	nats "github.com/nats-io/go-nats"
	uuid "github.com/satori/go.uuid"
)

func main() {
	const order = "tomato"
	// connect to NATS server
	natsConn, err := nats.Connect(nats.DefaultURL)
	if err != nil {
		log.Fatalf("Error connecting to nats: %v", err)
	}
	log.Println("Connected to NATS")
	defer natsConn.Close()

	// populate message data
	eventID, _ := uuid.NewV4()
	event := pb.EventStore{
		AggregateId:   "1",
		AggregateType: "Order",
		EventId:       eventID.String(),
		EventType:     "OrderCreated",
		EventData:     order,
	}
	subject := "Order.OrderCreated" // subject is the event subject
	data, _ := proto.Marshal(&event)

	// publish message
	natsConn.Publish(subject, data)
	log.Println("Published message on subject " + subject)
}
