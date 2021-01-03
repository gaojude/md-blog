import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { getProperTitle } from "../post-list/badgeUtil";

export const MaintainPostListDrawer = ({ posts, open, close }) => {
  return (
    <Drawer open={open} anchor={"left"} onClick={close}>
      <Container
        style={{
          padding: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            flexFlow: "row-reverse",
          }}
        >
          <Button size={"large"} color={"primary"}>
            Close
          </Button>
        </div>
        <List>
          <Link to={`/`}>
            <ListItem button>
              <ListItemText>
                <Typography color={"primary"}>Go to Home Page</Typography>
              </ListItemText>
            </ListItem>
          </Link>
          <Link to={`/maintain/posts/create`}>
            <ListItem button>
              <ListItemText>
                <Typography color={"primary"}>New Document</Typography>
              </ListItemText>
            </ListItem>
          </Link>
          <Divider />
          {posts.map(({ _id, title }) => (
            <Link key={_id} to={`/maintain/posts/edit/${_id}`}>
              <ListItem button>
                <ListItemText>
                  <Typography color={"textSecondary"}>
                    {getProperTitle(title)}
                  </Typography>
                </ListItemText>
              </ListItem>
            </Link>
          ))}
        </List>
      </Container>
    </Drawer>
  );
};
