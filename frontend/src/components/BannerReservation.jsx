import "./bannerreservation.css";

function BannerReservation(props) {
  const { description } = props;
  return (
    <div className="bannerReservation">
      <div className="text">
        <p>{description} RESERVATION</p>
      </div>
    </div>
  );
}

export default BannerReservation;
