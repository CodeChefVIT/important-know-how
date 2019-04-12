package main

import (
	"fmt"
	"log"
	"runtime"

	"github.com/angadsharma1016/event_sourcing_NATS/pb"
	"github.com/gogo/protobuf/proto"
	nats "github.com/nats-io/go-nats"
)

func main() {

	// connect to NATS
	natsConn, err := nats.Connect(nats.DefaultURL)
	if err != nil {
		log.Fatalf("Error connecting to NATS: %v", err)
	}
	log.Println("Connected to NATS")

	// subscribe
	const subject = "Order.>"
	natsConn.Subscribe(subject, func(msg *nats.Msg) {
		eventStore := pb.EventStore{}
		err := proto.Unmarshal(msg.Data, &eventStore)
		if err == nil {
			fmt.Println(eventStore)
			log.Printf("Received message in different service: %v", eventStore)
			// now insert event into eventStore
		} else {
			fmt.Println(err)
		}
	})

	// terminate the goroutine that called it, keeps connection alive
	runtime.Goexit()
	natsConn.Close()
}
