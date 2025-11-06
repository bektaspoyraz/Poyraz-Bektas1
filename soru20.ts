type SegmentToParam<S extends string> = S extends `:${infer P}` ? { [K in P]: string } : {};
type ParseSegments<S extends string> =
  S extends `${infer Head}/${infer Tail}`
      ? SegmentToParam<Head> & ParseSegments<Tail>
          : SegmentToParam<S>;

          type ParseRouteParams<T extends string> = T extends `/${infer Rest}` ? ParseSegments<Rest> : ParseSegments<T>;

          type Route1 = "/users/:id";
          type Route2 = "/posts/:postId/comments/:commentId";

          type Params1 = ParseRouteParams<Route1>;
          type Params2 = ParseRouteParams<Route2>;

          const p1: Params1 = { id: "123" };
          const p2: Params2 = { postId: "abc", commentId: "xyz" };

          console.log("Soru 20 Başarılı!", p1.id, p2.postId);
          