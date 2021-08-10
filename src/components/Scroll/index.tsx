import React from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Fab, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  scroll: (props: { visible?: boolean }) => {
    if (props.visible)
      return {
        opacity: 1,
        transition: ".3s linear",
      };
    else
      return { opacity: 0, transition: ".3s linear", cursor: "context-menu" };
  },
});

const ScrollToTop: React.FC = () => {
  const [isVisible, setVisible] = React.useState<boolean>(false);
  const classes = useStyles({ visible: isVisible });

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const btnScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <Box position="fixed" bottom={12} right={12}>
      <Fab
        size="medium"
        color="secondary"
        aria-label="add"
        className={classes.scroll}
        onClick={isVisible ? btnScrollToTop : () => {}}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Box>
  );
};

export default ScrollToTop;
