package main

import (
	"context"
	"log"

	"github.com/angadsharma1016/grpc-tut/api"
	"google.golang.org/grpc"
)

func main() {

	// create a grpc conn and dial it
	var conn *grpc.ClientConn
	conn, err := grpc.Dial(":7777", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("Errof dialing GRPC server: %v", err)
	}
	defer conn.Close()

	// create a new ping client and call the interface
	c := api.NewPingClient(conn)

	response, err := c.SayHello(context.Background(),
		&api.PingMessage{Greeting: "Hello from client"})

	if err != nil {
		log.Fatalf("Error calling PingMessage: %v", err)
	}

	log.Println("Response from gRPC server: %s", response.Greeting)

}
