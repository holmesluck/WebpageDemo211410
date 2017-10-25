var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nano = require('nano')('https://97966228-6ae2-47c5-b355-68982b4447e9-bluemix:cc9cdfe97378460cc59198a9712e0712a03eb0954f102e794fea2bae8420ff9b@97966228-6ae2-47c5-b355-68982b4447e9-bluemix.cloudant.com');

// var db= require('DB');
// var WebPageDB = require('WebPageDB');
var response;

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

app.get('./views/index.ejs', function (req, res) {
    res.sendFile( __dirname + "/" + "./views/index.ejs" );
});

app.post('/process_post', urlencodedParser, function (req, res) {


    // 输出 JSON 格式
    response = {

            UserName:req.body.username,
            UserId:req.body.id,
            Department:req.body.Department,
            PaymentSD:req.body.PSSDoption,
            PaymentD:req.body.PSDoption,
            PaymentDt:req.body.PSDtoption,
            PaymentRM:req.body.PaymentRM,
            BlockchainSD:req.body.BSDoption,
            BlockchainD:req.body.BSDoption,
            BlockchainDt:req.body.BDtoption,
            BlockchainRM:req.body.BlockchainRM,
            FSSSD:req.body.FSDoption,
            FSSD:req.body.FDoption,
            FSSDt:req.body.FDtoption,
            FSSRM:req.body.FSRM,
            SaasSD:req.body.SaSDoption,
            SaasD:req.body.SaDoption,
            SaasDt:req.body.SaDtoption,
            SaasRM:req.body.SSRM,
            MDSD:req.body.MDSDoption,
            MDD:req.body.MDDoption,
            MDDt:req.body.MDDoption,
            MDRM:req.body.AIRM,
            WatsonSD:req.body.WGSDoption,
            WatsonD:req.body.WGDoption,
            Watson:req.body.WGDtoption,
            WatsonRM:req.body.WGSRM,
            CASD:req.body.CASDoption,
            CAD:req.body.CADoption,
            CADt:req.body.CADtoption,
            CARM:req.body.CARM,
            ChatbotSD:req.body.WSSDoption,
            ChatbotD:req.body.WSDoption,
            ChatbotDt:req.body.WSDtoption,
            ChatbotRM:req.body.WSCRM,
            TraditionSD:req.body.TDSDoption,
            TraditionD:req.body.TDDoption,
            TraditionDt:req.body.TDDtoption,
            TraditionRM:req.body.TDRM,
            BigSD:req.body.BDSDoption,
            BigD:req.body.BDDoption,
            BigDt:req.body.BDDtoption,
            BigRM:req.body.BDIRM,
            InformationSD:req.body.IISDoption,
            InformationD:req.body.IIDoption,
            InformationDt:req.body.IIDtoption,
            InformationRM:req.body.IIRM,
            GovernanceSD:req.body.SGSDoption,
            GovernanceD:req.body.SGDoption,
            GovernanceDt:req.body.SGDtoption,
            GovernanceRM:req.body.SGRM,
            NoSQLSD:req.body.NDSDoption,
            NoSQLD:req.body.NDDoption,
            NoSQLDt:req.body.NDDtoption,
            NoSQLRM:req.body.NDRM,
            ContainerSD:req.body.CMSDoption,
            ContainerD:req.body.CMDoption,
            ContainerDt:req.body.CMDtoption,
            ContainerRM:req.body.CMRM,
            BlueMixSD:req.body.BMSDoption,
            BlueMixD:req.body.BMDoption,
            BlueMixDt:req.body.BMDtoption,
            BlueMixRM:req.body.BMRM,
            DevOpsSD:req.body.DOSDoption,
            DevOpsD:req.body.DODoption,
            DevOpsDt:req.body.DODtoption,
            DevOpsRM:req.body.DORM,
            InHWSD:req.body.IHSDoption,
            InHWD:req.body.IHDoption,
            InHWDt:req.body.IHDtoption,
            InHWRM:req.body.IHRM,
            InSWSD:req.body.ISSDoption,
            InSWD:req.body.ISDoption,
            InSWDt:req.body.ISDtoption,
            InSWRM:req.body.ISRM,
            VirtualizationSD:req.body.VISDoption,
            VirtualizationD:req.body.VIDoption,
            VirtualizationDt:req.body.VIDtoption,
            VirtualizationRM:req.body.VRM,
            MFHWSD:req.body.MHSDoption,
            MFHWD:req.body.MHDoption,
            MFHWDt:req.body.MHDtoption,
            MFHWRM:req.body.MHM,
            MFSWSD:req.body.MSSDoption,
            MFSWD:req.body.MSDoption,
            MFSWDt:req.body.MSDtoption,
            MFSWRM:req.body.MSRM,
            iSHWSD:req.body.iHSDoption,
            iSHWD:req.body.iHDoption,
            iSHWDt:req.body.iHDtoption,
            iSHWRM:req.body.IHDRM,
            iSSWSD:req.body.ISeSDoption,
            iSSWD:req.body.ISeDoption,
            iSSWDt:req.body.ISeDtoption,
            iSSWRM:req.body.ISDRM,
            PowerHWSD:req.body.PHSDoption,
            PowerHWD:req.body.PHDoption,
            PowerHWDt:req.body.PHDtoption,
            PowerHWLRM:req.body.PHRM,
            PowerSWSD:req.body.PoSSDoption,
            PowerSWD:req.body.PoSDoption,
            PowerSWDt:req.body.PoSDtoption,
            PowerSWRm:req.body.PSRM,
            x86HWSD:req.body.XHSDoption,
            x86HWD:req.body.XHDoption,
            x86HWDt:req.body.XHDtoption,
            x86HWRM:req.body.x86HWRM,
            x86SWSD:req.body.XSSDoption,
            x86SWD:req.body.XSDoption,
            x86SWDt:req.body.XSDtoption,
            x86SWRM:req.body.x86SWRM,
            StorageSD:req.body.StSDoption,
            StorageD:req.body.StDoption,
            StorageDt:req.body.StDtoption,
            StorageRM:req.body.STRM,
            NetworkingSD:req.body.NeSDoption,
            NetworkingD:req.body.NeDoption,
            NetworkingDt:req.body.NeDoption,
            NetworkingRM:req.body.NWRM,
            BankingSD:req.body.BaSDoption,
            BankingD:req.body.BaDoption,
            BankingDt:req.body.BaDtoption,
            BankingRM:req.body.BKRM,
            InsuranceSD:req.body.InSDoption,
            InsuranceD:req.body.InDoption,
            InsuranceDt:req.body.InDtoption,
            InsuranceRM:req.body.ISRRM,
            FSSD1:req.body.FSSDoption1,
            FSD:req.body.FSDoption1,
            FSDt:req.body.FSDtoption1,
            FSRM:req.body.FSSRM,
            GovernmentSD:req.body.GoSDoption,
            GovernmentD:req.body.GoDoption,
            GovernmentDt:req.body.GoDtoption,
            GovernmentRM:req.body.GRRM,
            RetailSD:req.body.ReSDoption,
            RetailD:req.body.ReDoption,
            RetailDt:req.body.ReDtoption,
            RetailRM:req.body.RTRM,
            TelecomSD:req.body.TeSDoption,
            TelecomD:req.body.TeDoption,
            TelecomDt:req.body.TeDtoption,
            TelecomRM:req.body.TLRM,
            TravelSD:req.body.TTSDoption,
            TravelD:req.body.TTDoption,
            TravelDt:req.body.TTDtoption,
            TravelRM:req.body.TTRM,
            HealcareSD:req.body.HeSDoption,
            HealcareD:req.body.HeDoption,
            HealcareDt:req.body.HeDtoption,
            HealcareRM:req.body.HLRM,
            MediaSD:req.body.MESDoption,
            MediaD:req.body.MEDoption,
            MediaDt:req.body.MEDtoption,
            MediaRM:req.body.MERM,
            EducationSD:req.body.EdSDoption,
            EducationD:req.body.EdDoption,
            EducationDt:req.body.EdDtoption,
            EducationRM:req.body.EDRM,
            OthersSD:req.body.OPSDoption,
            OthersD:req.body.OPDoption,
            OthersDt:req.body.OPDtoption,
            OthersRM:req.body.OTRM
    };
    // specify the database we are going to use
    var webpage = nano.use('webpage');
    // and insert a document in it
    webpage.insert({'date':new Date(),'landscapes': [response]});
    console.log('Congratulations,you have submit all the result!');
    console.log('And all data show below side');
    console.log(response);
    console.log(Object.keys(response).length);
    // res.end(JSON.stringify(response));
    res.end('Congratulations,you have submit all the data!!!!!');
});


var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;
    if (process.env.hasOwnProperty("VCAP_SERVICES")) {
        // Running on Bluemix. Parse out the port and host that we've been assigned.
        var env = JSON.parse(process.env.VCAP_SERVICES);
        host = process.env.VCAP_APP_HOST;
        port = process.env.VCAP_APP_PORT;
    }
    console.log("Real address", host, port);

});


// exports.getresponse=function(response){
//         if(isNaN(response))
//         {
//                 console.log('get response successful');
//                 return response;
//         }
//     return false;
// }


module.exports = app;

