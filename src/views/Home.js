import React from "react";

/** Material core*/
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import MessageIcon from '@material-ui/icons/Message';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

/** Component */
import GridContainer from "../components/cards/GridContainer.js";
import CardIcon from "../components/cards/CardIcon.js";
import CardHeader from "../components/cards/CardHeader.js";
import Card from "../components/cards/Card.js";
import GridItem from "../components/cards/GridItem.js";
import FolderList from "./MessageFolder.js";

/** Assets */
import styles from "../assets/styles/views/dashboardStyle.js";


const useStyles = makeStyles(styles);

export default function Home() {
    const classes = useStyles();
    return (
        <div>
            <GridContainer >
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="warning">
                                <Icon> <MessageIcon /></Icon>
                            </CardIcon>
                            <p className={classes.cardCategory}>Tin nhắn</p>
                            <h3 className={classes.cardTitle}>
                                49<small></small>
                            </h3>
                        </CardHeader>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="success" stats icon>
                            <CardIcon color="success">
                                <Icon> <ContactPhoneIcon /></Icon>
                            </CardIcon>
                            <p className={classes.cardCategory}>Danh bạ</p>
                            <h3 className={classes.cardTitle}>
                                49<small></small>
                            </h3>
                        </CardHeader>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="danger" stats icon>
                            <CardIcon color="danger">
                                <Icon> <PhotoLibraryIcon /></Icon>
                            </CardIcon>
                            <p className={classes.cardCategory}>Hình ảnh</p>
                            <h3 className={classes.cardTitle}>
                                49<small></small>
                            </h3>
                        </CardHeader>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="info" stats icon>
                            <CardIcon color="info">
                                <Icon> <MessageIcon /></Icon>
                            </CardIcon>
                            <p className={classes.cardCategory}>Số tin nhắn</p>
                            <h3 className={classes.cardTitle}>
                                49<small></small>
                            </h3>
                        </CardHeader>
                    </Card>
                </GridItem>
                <FolderList />
            </GridContainer>
        </div>
    );
}