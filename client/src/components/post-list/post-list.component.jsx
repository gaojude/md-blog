import React from "react";
import { Link } from "react-router-dom";
import { getProperTitle, parseBadges } from "./badgeUtil";
import { lowerCase } from "lodash";
import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";

const KEY_WORDS = ["pin", "hidden"];

function renderTitle(title) {
  const badges = parseBadges(title);
  const proper = getProperTitle(title);
  return (
    <Typography color={"textPrimary"}>
      {badges.map(renderBadge)} <br /> {proper}
    </Typography>
  );
}

function renderBadge(badgeName) {
  if (KEY_WORDS.includes(lowerCase(badgeName))) {
    return null;
  }
  return <span className={`badge badge-light`}>{badgeName}</span>;
}

const PostList = ({ posts }) => {
  const eligiblePosts = posts
    .filter(
      (post) => !parseBadges(post.title).map(lowerCase).includes("hidden")
    )
    .sort((post) =>
      parseBadges(post.title).map(lowerCase).includes("pin") ? -1 : 0
    );

  return (
    <Container>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={1}
      >
        {eligiblePosts.map(({ _id, title }) => (
          <Grid item xs={12} md={6}>
            <CardContainer>
              <Link key={_id} to={`/post/${_id}`}>
                <Card square>
                  <CardContent>
                    <Typography component="h5" variant="body2">
                      {renderTitle(title)}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </CardContainer>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PostList;

const CardContainer = styled.div`
  flex-grow: 1;
`;
