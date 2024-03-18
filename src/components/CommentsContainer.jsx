import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "@surajmaurya45",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod fugit dicta dolorum mollitia illum iusto velit nam ducimus consectetur exercitationem. Quo nam animi aut ex sapiente temporibus, magnam consectetur voluptate!",
    replies: [
      {
        name: "@surajmaurya45",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod fugit dicta dolorum mollitia illum iusto velit nam ducimus consectetur exercitationem. Quo nam animi aut ex sapiente temporibus, magnam consectetur voluptate!",
        replies: [
          {
            name: "@surajmaurya45",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod fugit dicta dolorum mollitia illum iusto velit nam ducimus consectetur exercitationem. Quo nam animi aut ex sapiente temporibus, magnam consectetur voluptate!",
            replies: [
              {
                name: "@surajmaurya45",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod fugit dicta dolorum mollitia illum iusto velit nam ducimus consectetur exercitationem. Quo nam animi aut ex sapiente temporibus, magnam consectetur voluptate!",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "@surajmaurya45",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod fugit dicta dolorum mollitia illum iusto velit nam ducimus consectetur exercitationem. Quo nam animi aut ex sapiente temporibus, magnam consectetur voluptate!",
        replies: [],
      },
    ],
  },
  {
    name: "@surajmaurya45",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod fugit dicta dolorum mollitia illum iusto velit nam ducimus consectetur exercitationem. Quo nam animi aut ex sapiente temporibus, magnam consectetur voluptate!",
    replies: [],
  },
  {
    name: "@surajmaurya45",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod fugit dicta dolorum mollitia illum iusto velit nam ducimus consectetur exercitationem. Quo nam animi aut ex sapiente temporibus, magnam consectetur voluptate!",
    replies: [
      {
        name: "@surajmaurya45",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod fugit dicta dolorum mollitia illum iusto velit nam ducimus consectetur exercitationem. Quo nam animi aut ex sapiente temporibus, magnam consectetur voluptate!",
        replies: [],
      },
    ],
  },
  {
    name: "@surajmaurya45",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod fugit dicta dolorum mollitia illum iusto velit nam ducimus consectetur exercitationem. Quo nam animi aut ex sapiente temporibus, magnam consectetur voluptate!",
    replies: [
      {
        name: "@surajmaurya45",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod fugit dicta dolorum mollitia illum iusto velit nam ducimus consectetur exercitationem. Quo nam animi aut ex sapiente temporibus, magnam consectetur voluptate!",
        replies: [
          {
            name: "@surajmaurya45",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod fugit dicta dolorum mollitia illum iusto velit nam ducimus consectetur exercitationem. Quo nam animi aut ex sapiente temporibus, magnam consectetur voluptate!",
            replies: [
              {
                name: "@surajmaurya45",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod fugit dicta dolorum mollitia illum iusto velit nam ducimus consectetur exercitationem. Quo nam animi aut ex sapiente temporibus, magnam consectetur voluptate!",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "@surajmaurya45",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod fugit dicta dolorum mollitia illum iusto velit nam ducimus consectetur exercitationem. Quo nam animi aut ex sapiente temporibus, magnam consectetur voluptate!",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="my-4 px-4">
      <h2 className="text-2xl font-bold py-3">Comments</h2>
      <div>
        <CommentsList commentsData={commentsData} />
      </div>
    </div>
  );
};

export default CommentsContainer;
