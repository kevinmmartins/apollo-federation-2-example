# Apollo GraphQL Federation 2 Example

Simple POC with Apollo Federation 2

## Docs

Full docs avaliable on [Apollo Docs](https://www.apollographql.com/docs/federation/v2/quickstart/setup/)

## Setup

```
nvm use
npm i
npm start
```

Access 

```
http://localhost:4000/
```

On Apollo Sandbox execute

```
query getProduct($productId: ID!) {
  product(id: $productId) {
    description
  }
}

{
  "productId": 1
}
```

Must result 

```
{
  "data": {
    "product": {
      "description": "Rerum quis et sit ab ab doloremque. Cumque vero architecto sit maiores deserunt et ducimus quod. Eveniet dolor modi et rerum sed. Quas sint ducimus enim accusamus. In est dolores ut cumque et. Earum impedit atque qui hic enim eos illo architecto."
    }
  }
}
```

## Useful commands

```
rover subgraph publish Apollo-Federation-2-Example@current \
  --routing-url https://rover.apollo.dev/quickstart/products/graphql \
  --schema ./src/products.graphql \
  --name products \
  --convert

rover subgraph publish Apollo-Federation-2-Example@current \
  --routing-url https://rover.apollo.dev/quickstart/reviews/graphql \
  --schema ./src/reviews.graphql \
  --name reviews`

rover fed2 supergraph compose --config ./src/supergraph-config.yaml

rover fed2 supergraph compose --config ./src/supergraph-config.yaml > ./src/supergraph.graphql
```

## Prints

![terminal](https://user-images.githubusercontent.com/20428703/152649562-b4f08677-0c16-4cb8-a7bc-1e8d25dc77da.png)

![Studio Home](https://user-images.githubusercontent.com/20428703/152649564-45276601-c774-4b03-8b92-1ff6f9a10762.png)

![Schema](https://user-images.githubusercontent.com/20428703/152649565-caa815e5-dd44-4e8b-b2d5-b49d50286939.png)

![Query](https://user-images.githubusercontent.com/20428703/152649568-51a36508-82ae-4b20-9268-bec8391ac201.png)
