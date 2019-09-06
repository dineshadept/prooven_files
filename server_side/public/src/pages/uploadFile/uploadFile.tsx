import * as  React from 'react';
import '../css/main.css';
import Navbar from "../../components/header/navbar";
import Footer from "../../components/footer/footer";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

class UploadFile extends React.Component {
    public state = {
      files: [
        {
          options: {
            type: "local"
          }
        }
      ]
    }

    public handleInit() {
      console.log("FilePond instance has initialised");
    }
    public render() {     
        return (
            <div>
                <Navbar />
                <div className="container security-cl">
                    <div className="top-head">
                       
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                            <FilePond
                            files={this.state.files}
                            allowMultiple={true}
                            maxFiles={3}
                            server="https://us-central1-prooven1-95022.cloudfunctions.net/api/upload"
                            oninit={() => this.handleInit()}
                            onupdatefiles={fileItems => {
                            this.setState({
                            files: fileItems.map(fileItem => fileItem.file)
                            });
                            }}
                            />                          
                         </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default UploadFile;