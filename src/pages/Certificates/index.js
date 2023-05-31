import { ScrollView, View } from 'react-native';
import { CertificateSection } from '../../components/index';
import { CERTIFICATES } from '../../data/CERTIFICATES';
// import { styles } from './styles';



const it = { 
    index: 0,
    type: "it",
    url: "/JSON/cert-IT.json",
    en: "IT",
    ua: "IT",
};

const languages = { 
    index: 0,
    type: "lang",
    url: "/JSON/cert-Lang.json",
    en: "Languages",
    ua: "Мови",
};

export default function Certificates() {
	return (
        <ScrollView style={{height: '100%', paddingTop: 30}}>
            <CertificateSection 
                object={it} 
                certififcates={CERTIFICATES.filter((elem) => elem.type==='IT')}
            />
            <CertificateSection 
                object={languages} 
                certififcates={CERTIFICATES.filter((elem) => elem.type==='Language')}
            />
        </ScrollView>
	);
}
