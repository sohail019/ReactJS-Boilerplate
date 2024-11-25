// @ts-nocheck
import { createServer, Model, Factory, Response } from 'miragejs';

export function makeServer() {
  return createServer({
    models: {
      post: Model,
    },

    factories: {
      post: Factory.extend({
        title(i: number) {
          return `Post ${i}`;
        },
        body(i: number) {
          return `Body content for post ${i}`;
        },
      }),
    },

    seeds(server) {
      server.create('post', {
        id: '1',
        title: 'Learn React Query',
        body: 'It simplifies API handling!',
      });
      server.create('post', {
        id: '2',
        title: 'Explore MirageJS',
        body: 'Mock APIs are awesome!',
      });
    },

    routes() {
      this.namespace = 'api';

      // Fetch all posts
      this.get('/posts', schema => schema.posts.all());

      // Fetch a specific post by ID
      this.get('/posts/:id', (schema, request) => {
        const id = request.params.id;
        const post = schema.posts.find(id);
        if (post) {
          return post;
        } else {
          return new Response(404, {}, { error: 'Post not found' });
        }
      });

      // Create a new post
      this.post('/posts', (schema, request) => {
        const data = JSON.parse(request.requestBody);
        const newPost = schema.posts.create(data);
        return newPost;
      });

      //? Delete a post
      this.delete('/posts/:id', (schema, request) => {
        const id = request.params.id;
        const post = schema.posts.find(id);
        if (post) {
          post.destroy();
          return new Response(204);
        } else {
          return new Response(404, {}, { error: 'Post not found' });
        }
      });

      //? Update a post
      this.put('/posts/:id', (schema, request) => {
        const id = request.params.id;
        const attrs = JSON.parse(request.requestBody);
        let post = schema.posts.find(id);

        if (post) {
          post.update(attrs);
          return post;
        } else {
          return new Response(404, {}, { error: 'Post not found' });
        }
      });
    },
  });
}
