import React from 'react';
import "../spinner.css";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

function LoadingSpinner() {
    return (
        <div>
            <div class="no-freeze-spinner">
                <div id="no-freeze-spinner">
                    <div>
                    <i class="material-icons bi bi-bag-plus-fill"></i>
                    <i class="bi bi-heart-pulse-fill"></i>
                    <i class="bi bi-hospital"></i>
                    {/* <i class="bi bi-prescription2"></i> */}
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoadingSpinner