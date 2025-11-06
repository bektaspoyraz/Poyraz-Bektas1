type Brand<K, T> = K & { __brand: T };
type UserID = Brand<string, 'UserID'>;
type PostID = Brand<string, 'PostID'>;

function logID(id: string) { console.log(id); }

let userID = "user-123" as UserID;
let postID = "post-456" as PostID;

logID(userID);
logID(postID);

console.log("Soru 16 Başarılı!");
